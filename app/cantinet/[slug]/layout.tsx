import { notFound } from "next/navigation"
import { getAuthSession } from "../../../lib/helpers/auth"
import { db } from "../../../lib/helpers/db"
import { format } from "date-fns"
import SubscribeToggle from "../../../lib/components/cantinet/SubscribeToggle"
import MenuButton from "../../../lib/components/navbar/MenuButton"

// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

const Layout = async ({ 
        children, 
        params: {slug} 
    }:{
        children: React.ReactNode
        params: { slug: string }
    }) => {

    const session = await getAuthSession()

    const subreddit = await db.subreddit.findFirst({
        where: { name: slug},
        include: {
            posts:{
                include: {
                    author: true,
                    votes: true
                }
            }
        }
    })

    const subscription = !session?.user ? undefined : await db.subscription.findFirst({
        where: {
            subreddit:{
                name: slug,
            },
            user: {
                id: session.user.id,
            }
        }
    })

    const isSubscribed = !!subscription

    if(!subreddit) return notFound()

    const memberCount = await db.subscription.count({
        where:{
            subreddit:{
                name: slug
            }
        }
    })

    return(
        <div className="grid grid-cols-2">
            {/* TODO: Back button, might be something to put in the OSframe */}
            {children}
            <div>
                <div>
                    <p>About cantinet/{subreddit.name}</p>
                    <dt>Created</dt>
                    <dd>
                        <time dateTime={subreddit.createdAt.toDateString()}>
                            {format(subreddit.createdAt, 'MMMM d, yyyy')}
                        </time>
                    </dd>
                </div>
                <div>
                <dt>Members</dt>
                    <dd>
                        <div>{memberCount}</div>
                    </dd>
                </div>

                {subreddit.creatorId === session?.user.id ? (
                    <div>
                        <p>You own this cantinet.</p>
                    </div>
                ): null }

                {subreddit.creatorId !== session?.user.id ? (
                    <SubscribeToggle
                        isSubscribed={isSubscribed}
                        subredditId={subreddit.id}
                        subredditName={subreddit.name}
                    />
                ): null}
                <MenuButton
                    name={'Create Post'}
                    // TODO:refactor to say href
                    link={`/cantinet/${slug}/submit`}
                />
            </div>
        </div>
    )
}

export default Layout