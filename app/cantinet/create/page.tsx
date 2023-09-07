'use client';

// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

import { useState } from "react";
import MenuButton from "../../../lib/components/navbar/MenuButton";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { CreateSubredditPayload } from "../../../lib/validators/subreddit";

const Page = () => {
    const [input, setInput] = useState<string>('')
    const router = useRouter()

    const { mutate: createCommunity, isLoading } = useMutation({
        mutationFn: async () => {
            const payload: CreateSubredditPayload = {
                name: input,
            }

            const {data} = await axios.post('/api/cantinet/subreddit', payload)

            return data as string
        }, 
        onError: (error) => {
            if (error instanceof AxiosError) {
                if (error.response?.status===409){
                    console.log('Subreddit already exists')
                    return
                }
            }
            if (error instanceof AxiosError) {
                if (error.response?.status===422){
                    console.log('Invalid subreddit name')
                    return
                }
            }
            if (error instanceof AxiosError) {
                if (error.response?.status===401){
                    console.log('Log in to create a community')
                    // TODO: create log in error component
                    return
                }
            }

            // TODO: catch all error route
        },
        onSuccess: (data) => {
            router.push(`/cantinet/${data}`)
        }
    })

    return(
        <div>
            <div>
                 <h1>Create Community</h1>
            </div>
            {/* TODO: Should this be done with CSS or HTML? Not sure why I wouldn't just put a border or outline on the element unless that effects element positioning */}
            <hr className="bg-gray-500 h-px"></hr>
            <div>
                <p>Name</p>
                <p>Community names including capitalization cannot be changed</p>
            </div>
            <div className="">
                <p className="">cantinet/</p>
                {/* TODO: reate input component */}
                <input 
                    value={input} 
                    onChange={(e)=>setInput(e.target.value)}
                />
            </div>
            <div>
                <MenuButton
                    name="Cancel"
                    link=""
                    action={()=>router.back()}
                />
                <MenuButton
                    // TODO: add isLoading and disabled to button. basically figure out all the props I'll need and refactor the menu button into a general button component later
                    // isLoading={isLoading}
                    // diabled
                    name="Create"
                    link=""
                    action={()=> createCommunity()}
                />
            </div>
        </div>
    )
}

export default Page