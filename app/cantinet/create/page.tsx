'use client';

import { useState } from "react";
import MenuButton from "../../../lib/components/navbar/MenuButton";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Page = () => {
    const [input, setInput] = useState<string>('')
    const router = useRouter()

    const {} = useMutation({
        mutationFn: async () => {
            const payload = {
            }
            const {data} = await axios.post('/api/cantinet')
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
                    name="Create"
                    link=""
                />
            </div>
        </div>
    )
}

export default Page