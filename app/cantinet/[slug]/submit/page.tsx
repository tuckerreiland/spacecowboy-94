import { notFound } from "next/navigation"
import { db } from "../../../../lib/helpers/db"
import MenuButton from "../../../../lib/components/navbar/MenuButton"
import Editor from "../../../../lib/components/cantinet/post/Editor"

interface PageProps {
    params: {
      slug: string
    }
}

const page = async ({params}: PageProps) => {
    const subreddit = await db.subreddit.findFirst({
        where: {
            name:params.slug,
        }
    })

    // TODO: buildout notFound component
    if (!subreddit) return notFound()


    return(
        <div>
            <div>
                <div>
                    <h3>
                        Submit Post
                    </h3>
                    <p>in cantinte/{subreddit.name}</p>
                </div>
            </div>

            {/* Form Input */}
            <Editor
                subredditId={subreddit.id}
            />

            <div>
                <MenuButton
                    form='subreddit-post-form'
                    name="Submit Post"
                />
            </div>
        </div>
    )
}

export default page