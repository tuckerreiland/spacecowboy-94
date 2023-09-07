'use client';

import { FC, useCallback, useEffect, useRef, useState } from 'react'

import TextareaAutosize from 'react-textarea-autosize'
import { useForm } from 'react-hook-form'
import { PostCreationRequest, PostValidator } from '../../../validators/post';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import EditorJS from '@editorjs/editorjs';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';

interface EditorProps {
  subredditId: string
}

type FormData = z.infer<typeof PostValidator>

const Editor: FC<EditorProps> = ({subredditId}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(PostValidator),
        defaultValues: {
            subredditId,
            title: '',
            content: null,
        }
    })

    const ref = useRef<EditorJS>()
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const _titleRef = useRef<HTMLTextAreaElement>(null)
    const pathname = usePathname()
    const router = useRouter()

    const initalizeEditor = useCallback( async ()=>{
        const EditorJS = (await import('@editorjs/editorjs')).default
        const Header = (await import('@editorjs/header')).default
        const Embed = (await import('@editorjs/embed')).default
        const Table = (await import('@editorjs/table')).default
        const List = (await import('@editorjs/list')).default
        const Code = (await import('@editorjs/code')).default
        const LinkTool = (await import('@editorjs/link')).default
        const InlineCode = (await import('@editorjs/inline-code')).default
        // const ImageTool = (await import('@editorjs/image')).default

        if (!ref.current){
            const editor = new EditorJS({
                holder: 'editor',
                onReady() {
                    ref.current = editor
                },
                placeholder: 'Type here to write your post...',
                inlineToolbar: true,
                data: { blocks: [] },
                tools: {
                    header: Header,
                    linkTool:{
                        class: LinkTool,
                        // TODO: Check if this is how I want to do this.
                        config: '/api/link'
                    },
                    // image: {
                    //     class: ImageTool,
                    //     config: {
                    //       uploader: {
                    //         async uploadByFile(file:File) {
                    //         //   TODO: S3 implementatoin
                    //         },
                    //       },
                    //     },
                    //   },
                    list: List,
                    code: Code,
                    inlineCode: InlineCode,
                    table: Table,
                    embed: Embed
                }
            })
        }
    }, [])

    useEffect(()=>{
        const init = async () => {
            await initalizeEditor()

            setTimeout(()=>{
                _titleRef.current?.focus()
            }, 0)
        }

        if (isMounted) {
            init()

            return () => {
                ref.current?.destroy()
                ref.current = undefined
            }
        }
    }, [isMounted, initalizeEditor])

    const { mutate: createPost } = useMutation({
        mutationFn: async ({title, content, subredditId}: PostCreationRequest) => {
            const payload: PostCreationRequest = {
                subredditId, title, content
            }
            const { data } = await axios.post('/api/cantinet/post/create', payload)
            return data
        },
        onError: () => {
            console.log('Something went wrong')
        },
        onSuccess: () => {
            const newPathname = pathname.split('/').slice(0, -1).join('/')
            router.push(newPathname)
            router.refresh()
            // TODO: Success notification
            return
        }
    })

    async function onSubmit(data: PostCreationRequest) {
        const blocks = await ref.current?.save()

        const payload: PostCreationRequest = {
            title: data.title,
            content: blocks,
            subredditId
        }

        createPost(payload)
    }

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            setIsMounted(true)
        }
    }, [])

    useEffect(()=>{
        if(Object.keys(errors).length){
            for(const [_key, value] of Object.entries(errors)) {
                // error handling
                console.log((value as {message: string}).message)
            }
        }
    }, [errors])

    const {ref: titleRef, ...rest} = register('title')
    return (
        <div className='w-full border-[2px] border-gray-300'>
            <form 
                id='subreddit-post-form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='prose prose-stone dark:prose-invert'>
                    {/* TODO: look at this npm package for other text inputs like on the MVD website */}
                    <TextareaAutosize
                        ref={(e)=> {
                            titleRef(e)
                            _titleRef.current = e
                        }}
                        {...rest}
                        placeholder='title'
                        className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
                    />
                    <div id='editor' className='min-h-[500px]'/>
                </div>
            </form>
        </div>
    )
}

export default Editor