'use client';

import { useRouter } from "next/navigation";

import MenuButton from "../navbar/MenuButton";

// TODO: figure out how to pass svgs and icons to the Menu Button
import { X } from "lucide-react";

const CloseModal = () => {
    const router = useRouter()

    return(
        <div className="grid items-center h-fit w-fit p-[2px]">
            <MenuButton
                name={'x'}
                image={''}
                link={''}
                style={'justify-self-center px-[4px] py-[2px]'}
                action={() => router.back()}
            />
        </div>
        
    )
}

export default CloseModal