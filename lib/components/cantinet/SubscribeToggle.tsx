'use client';

import { FC, startTransition } from 'react'
import MenuButton from '../navbar/MenuButton'
import { useMutation } from '@tanstack/react-query';
import { SubscribeToSubredditPayload } from '../../validators/subreddit';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

interface SubscribeToggleProps {
    isSubscribed: boolean,
  subredditId: string,
  subredditName: string
}

const SubscribeToggle: FC<SubscribeToggleProps> = ({ isSubscribed, subredditId, subredditName }) => {

    const router = useRouter()

    const { mutate: subscribe, isLoading: isSubscribing } = useMutation({
        mutationFn: async () => {
            const payload: SubscribeToSubredditPayload = {
                subredditId,
            }
            
            const {data} = await axios.post('/api/cantinet/subreddit/subscribe', payload)

            return data as string
        },
        onError: (err) => {
            if(err instanceof AxiosError){
                if (err.response?.status === 401){
                    // TODO: login error pop up
                    console.log(err)
                    return
                }
            }
            // TODO: handle error
        },
        onSuccess: () => {
            startTransition(()=>router.refresh())
            console.log(`You are subscribed to ${subredditName}`)
            // TODO: Subscribed notification
        }
    })

    const { mutate: unsubscribe, isLoading: isUnsubscribing } = useMutation({
        mutationFn: async () => {
            const payload: SubscribeToSubredditPayload = {
                subredditId,
            }
            
            const {data} = await axios.post('/api/cantinet/subreddit/unsubscribe', payload)

            return data as string
        },
        onError: (err) => {
            if(err instanceof AxiosError){
                if (err.response?.status === 401){
                    // TODO: login error pop up
                    console.log(err)
                    return
                }
            }
            // TODO: handle error
        },
        onSuccess: () => {
            startTransition(()=>router.refresh())
            console.log(`You are unsubscribed from ${subredditName}`)
            // TODO: Subscribed notification
        }
    })

    return isSubscribed ? 
        <MenuButton
            name='Leave Cantinet'
            // TODO: add isloading to button
            action={()=>unsubscribe()}
        />:
        <MenuButton
            name='Subscribe'
            // TODO: add isloading to button
            action={()=>subscribe()}
        />
}

export default SubscribeToggle