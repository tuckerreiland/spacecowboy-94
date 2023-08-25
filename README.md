# SPACECOWBOY-94

## Stack
### Frontend
1. NextJS
2. Tailwind
3. Typescript
4. PrismaClient
### Backend
1. GraphQL
2. Prisma
3. PlanetScale

## Data Architecure
1. SPACECOWBOY-94 OS
    1. Home page that contains all of the apps
    2. Account management at this top level
        1. Signing up for anything means signing up to everything i.e. one account for forum, e-comm, subscription management, etc.
        2. Allos for simples user management
        3. Sign up with Google or personal email
        4. User Account
            1. schema
                * id
                * email
                * firstName
                * lastName
                * createdAt
                * updatedAt
                * image
                * username @unique no special values (only letters and numbers, @unique checks uppper/lowercase so can't have spacecowboy and SpaceCowboy (I'll probably reserve spacecowboy for my own personal purposes so there's no shenangians))
                * forum object
                * shop object
                * logbook object
            2. Shop
                1. Clone of order history from shopify
                2. Store personal information like address?
            3. forum
                1. communities (subreddits)
                2. posts
                3. replies
            4. subscriptions & permissions
                1. users permissions, purchases, subscriptions
                2. email/notification preferences
2. forum
    1. community
        1. creator
        2. mods
        3. members
        4. posts
    2. user
        1. posts
        2. comments
        3. votes
        4. communities { id, creator|mod|member }
        5. followers
    3. post
        1. user { username, id}
        2. community { community, id}
        3. createdAt
        4. updatedAt
        5. comments []
        6. votes []
        7. title
        8. content {JSON}
    4. comment
        1. user { username, id}
        2. community { community, id}
        3. createdAt
        4. updatedAt
        5. post { postName, id, community{ community, id }}
        5. comments []
        6. votes []
        7. content {JSON}
    5. postVote
        1. user { id, username }
        2. post { id, title }
        3. voteType { +|- }
    6. commentVote
        1. user { id, username }
        2. comment { id }
        3. voteType { +|- }
3. shop
    1. let shopify handle it
    2. clone order history into user account
4. 

## UI/UX
1. SPACECOWBOY-94 OS
2. forum
    1. home page ('/')
        1. Search bar
        2. create community button/link
        3. feed (session?custom:general)
    2. Create community page ('/'r'/create')
        1. name input
        2. description input
        3. guidelines rules input
        4. Create/Cancel Button
            1. Cancel (router.back())
            2. Create 
                * (useMutation() with @tanstack/react-query in video)
                * I'm not sure if I want to use axios or not, it is cleaner from a syntax perspective compared to fetch, but it's an external package
                    * must create a context provider, Josh created a providers.tsx in /ui
                * Josh makes lib/validators/subreddit.ts using a package called 'zod'
        5. create communit route.ts
            1. try/catch block
                ```
                    import { getAuthSession } from '@/lib/auth'
                    import { SubredditValidator } from '@/lib/validators/subreddit'
                    import { db } from '@/lib/db

                    export async function POST(req: Request) {
                        try{
                            const session = await getAuthSession()

                            if (!session?.user) {
                                return new Response('Unauthorized', { status: 401 })
                            }

                            const body = await req.json()
                            const { title } = SubredditValidator.parse(body)

                            const subredditExists = await dv.subreddit.findFirst({
                                where: {
                                    name,
                                }
                            })

                            if (subredditExists) {
                                return new Response('Subreddit already exists', { status: 409 })
                            }

                            const subreddit = await db.subreddit.create({
                                data:{
                                    name,
                                    creatorID: session.user.id
                                }
                            })

                            await db.subscription.create({
                                data: {
                                    userId: session.user.id,
                                    subredditId: subreddit.id
                                }
                            })

                            return new Response(subreddit.name)
                        } catch (error) {
                            if (error isntanceof z.ZodError){
                                returnn new Response(error.message, { status: 422 })
                            }

                            return new Response('Could not create subreddit', { status: 500 })
                        }
                    }            
                ```
    3. community page
        1. layout.tsx
            1. general community fetch/display logic here
            2. date-fns
        2. page.tsx
            1. interactivity logic
                * join/leave
                * post, etc.
        3. NotFound.tsx

3. */config.ts
    * export const INFINITE_SCROLL_PAGINATION_RESULTS = 2
        
## Component Docs
### /lib/components/forum/terminal
1. operates like a terminal would, tab autocompletes, down arrow brings to end of selection
2. come up with commands

# NOTES

### General
<!--  
    TODO: Add FC to react json from https://www.youtube.com/watch?v=mSUKMfmLAt0
    TODO: Prisma for database management?
    TODO: learn about intercept routes, @authModal https://www.youtube.com/watch?v=mSUKMfmLAt0 @1:40
        -basically this allows for a sign in modal, that if they reload the page will redirect to the sign in page
        -This is some pretty slick UX from NextJS
-->
## lib
### authOptions.ts
1. PrismaAdapter from next-auth/prisma-adapter, GoogleProvider from 'next-auth/providers/google
2. PrismaAdapter wraps db
3.  auth.ts:
```
export const authOptions: NextAuthOptions = {
session: {
    strategy: 'jwt'
},
pages: {
    //sign in route
    signIn: '/sign-in-route'
},
providers: [
    <!-- Get thse from GCP Console -->
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
],
callbacks:{
    //TODO: define next-auth.d.ts types (Josh Tried Coding Demo 1:08)
    async session({token, session}){
        if (token) {
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.image = token.picture
            session.user.username = token.username
        }
        return session
    }
    async jwt({ token, user}) {
        //next-auth or prisma specific?
        const dbUser = await db.user.findFirst({
            where: {
                email: tpken.email,
            }
        })

        if(!dbUser) {
            token.id = user!.id
            return token
        }

        if(!dbUser.username) {
            await db.user.update({
                where: {
                    id: dbUser.id
                }
                data: {
                    //nanoid npm package
                    username: nanoid(10)
                }
            })
        }
        return {
            id: dbUser.id,
            name: dbUser.name,
            email: dbUser.email,
            picture: dbUser.image,
            username: dbUser.username,
        }
    },
    redirect() {
        return '/'
    }
}}

export const getAuthSession = () => getServerSession(authOptions)
```


## /app/api
### /auth/[...nextauth]/route.ts
1. handler using next-auth


### UI/Tailwind
#### Icons
Lucide Icons
#### cn Utility function
<!-- IMPORTANT: use for conditional classes -->

Allows passing in conditional classes

1. tailwind-merge
```
import {twMerge} from 'tailwind-merge';
```

2. clsx
Enables passing of object to component for conditional rendering
```
import { clsx, ClassValue } from 'clsx';
```

3. cn Function
```
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}
```

4. userAuthForm typescript button example
##### Source : https://www.youtube.com/watch?v=mSUKMfmLAt0

```
import { FC } from React;
import { Button } from './'
import { cn } from '@/lib/utils

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{}

const UserAuthForm: FC <UserAuthFormProps> = ({ className, ...props}) => {
    return(
        <div className={cn('flex justify-center', className)}>
            <ButtonCompnonet/>
        </div>
    )
}

export default UserAuthForm
```





