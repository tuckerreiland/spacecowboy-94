import { cn, formatDate } from "@/lib/utils";
import HeroBanner from "../../global/image/HeroBanner";
import { MapPin
 } from "lucide-react";
import Link from "next/link";

const PostPage = ({post}) => {
    const mockPost = {
        ...post,
        title:'Post Title',
        // createdAt:'',
        // updatedAt:'',
        location:'San Francisco, CA',
        author:'Hello World',
        authorSlug: 'hello-world',
        photographer:'Hello World',
        photographerSlug: 'hello-world',
        hero:'https://placedog.net/1512/824',
        tagline:'',
        summary:"This is a summary of the post. Just a couple of sentences to describe the post and it's content.",
        content:[
            {
                tag: 'p',
                content: [
                    {
                        type:'',
                        text: 'Lorem ipsum dolor sit amet, '
                    },
                    {
                        type:'italic',
                        text: 'consectetur adipisicing elit. '
                    },
                    {
                        type:'',
                        text: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo '
                    },
                    {
                        type:'underline',
                        text: 'reprehenderit optio amet ab temporibus asperiores quasi cupiditate. '
                    },
                    {
                        type:'link',
                        href:'linktext',
                        text: 'Voluptatum ducimus'
                    },
                    {
                        type:'',
                        text: ' voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
                    },
                    {
                        type:'underline, italic',
                        text: '"Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"'
                    },
                ]
            },
            {
                tag: 'img',
                src: 'https://placedog.net/1512/824',
                alt: 'alt text'
            },
            {
                tag: 'h2',
                content: 'h2 Title'
            },
            {
                tag: 'p',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
            },
            {
                tag: 'p',
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
            },
            {
                tag: 'quote',
                content: ""
            },
        ],
    }
    console.log('Mock post content', mockPost.content)
  return (
    <div
        className={cn(
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
        )}
    >
        {mockPost.hero?
            // <PostHero/>
            <div
                className={cn(
                    'relative',
                )}
            >
                <HeroBanner
                    className={'fixed left-0 mb-10'}
                    src={mockPost.hero}
                    title={mockPost.title}
                    titleSize={'text-2xl lg:text-6xl text-pretty'}
                    // content={mockPost.summary}
                    href={''}
                    // byline={{
                    //     author: mockPost.author,
                    //     authorSlug: mockPost.authorSlug,
                    //     createdAt: mockPost.createdAt,
                    //     location: mockPost.location
                    // }}
                    backgroundColor={''}
                    textColor={'text-red-500'}
                />
            </div>
        :
            // PostTitle
            <h1 className={cn(
                    'text-4xl',
                    'lg:text-6xl',
                    'py-1',
                    'text-pretty'
                )}
            >
                {mockPost.title}
            </h1>
        }
        {/* <PostHeader/> */}
        <div
            className={cn(
                'mt-[100vh]',
                'flex',
                'flex-col',
                'items-center',
                'z-10',
                'h-fit',
                'bg-white',
                'w-full',
                )}
                >
            <div
                className={cn(
                    'w-full',
                    'md:w-2/3'
                    )}>
            {/* <PostSummary> */}
                <p
                    className={cn(
                        'text-xl',
                        'lg:text-2xl',
                        'py-1',
                        'text-pretty'
                        )}
                        >
                    {mockPost.summary}
                </p>
               {/* <Byline> */}
                    {/* <AuthorCard> */}
                <div className={cn(
                    'w-full',
                    'py-1'
                    )}>
                    <p
                        className={cn(
                            'italic',
                            )}
                            >Written by
                        <span> </span>
                        <Link
                            className='underline hover:no-underline hover:opacity-75'
                            href={`blog/${mockPost.authorSlug}`}
                            >
                            {mockPost.author}
                        </Link>
                    </p>
                </div>
                <div
                    className={cn(
                        'flex',
                        'flex-col',
                        'md:flex-row',
                        'md:items-center',
                        'text-sm',
                        'py-1'
                        )}
                        >
                    {mockPost.location?
                        <div
                        className={cn(
                            'flex',
                            'items-center'
                            )}
                            >
                            <MapPin
                                size={18}
                                strokeWidth={1.5}
                                />
                            <p> {mockPost.location} <span>&nbsp;</span> </p> 
                        </div>
                    :
                    null
                }
                    <div
                        className={cn(
                            'flex',
                            'items-center'
                            )}
                            >
                        <p>Published <span> </span> {formatDate(mockPost.createdAt, 'EEEE, MMMM d, y pp')}</p>
                        {mockPost.createdAt===mockPost.updatedAt?
                            null
                            :
                            <p><span className={cn('hidden md:block')}>|&nbsp;</span> Updated <span> </span> {formatDate(mockPost.updatedAt, 'EEEE, MMMM d, y pp')}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
        {/* <PostHeader/> */}
        <div
            className={cn(
                'z-10',
                'bg-white',
                'flex',
                'flex-col',
                'justify-center',
                'items-center',
                'px-2',
                'lg:px-0',
            )}
        >
                {
                    mockPost.content.map((element, index)=>{
                        switch(element.tag){
                            case 'p':
                                if (typeof element.content === 'string') {
                                    return <p
                                        className={cn(
                                            'w-2/3',
                                            'py-3',
                                            'text-pretty',
                                            'leading-loose',
                                            `${index===0?'first-letter:float-left first-letter:text-7xl first-letter:pr-2 first-letter:font-black':''}`
                                        )}
                                    >{element.content}</p>
                                } else {
                                    return <p
                                        className={cn(
                                            'w-2/3',
                                            'py-3',
                                            'text-pretty',
                                            'leading-loose',
                                            `${index===0?'first-letter:float-left first-letter:text-8xl first-letter:pr-2 first-letter:font-extrabold':''}`
                                        )}
                                    >
                                        {element.content.map((text)=>{
                                            switch(text.type) {
                                                case 'italic':
                                                    return <span
                                                        className={cn(
                                                            'italic'
                                                        )}
                                                    >{text.text}</span>
                                                case 'underline':
                                                    return <span
                                                        className={cn(
                                                            'underline'
                                                        )}
                                                    >{text.text}</span>
                                                case 'link':
                                                    return <span><a
                                                        className={cn(
                                                            'opacity-50',
                                                            'hover:opacity-100'
                                                        )}
                                                        href={text.href}
                                                    >{text.text}</a></span>
                                                case 'underline, italic':
                                                    return <span
                                                        className={cn(
                                                            'italic',
                                                            'underline'
                                                        )}
                                                    >{text.text}</span>
                                                case '':
                                                    return text.text
                                            }
                                        })}
                                    </p>
                                    
                                }
                            case 'img':
                                return <img 
                                    className={cn(
                                        'py-3'
                                    )}
                                    src={element.src} 
                                    alt={element.alt}
                                    />
                            case 'h2':
                                return <h2
                                className={cn(
                                    'w-2/3',
                                    'py-3',
                                    'text-xl',
                                    'lg:text-2xl',
                                    'text-pretty'
                                )}
                                >{element.content}</h2>
                            case 'quote':
                                break;
                        }
                    })
                }
            </div>
        </div>
  )
};

export default PostPage
