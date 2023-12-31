import Image from "next/image"
import Link from "next/link"

import PostCard from "../../lib/components/cantinet/PostCard"
import Terminal from "../../lib/components/cantinet/terminal/Terminal"

import MenuButton from "../../lib/components/navbar/MenuButton"

// TODO: decide if I want posts to be nested under a board by default, would make file structure [board]/[post]
// TODO: Rename file and refactor with space cowboy/cantinet proper terminology

export default function Page() {

    // TODO: getAllPosts fetch request
    const posts = [
        {
            title: 'cooking up some birria on the boilerplate',
            postId: 1,
            user: 'spacecowboy',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
            comments: [
                {
                    user: 'death-scroll',
                    replyId: 11,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[{
                        user: 'paraLLEVAR',
                        replyId: 111,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[{
                            user: 'death-scroll',
                            replyId: 1111,
                            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                            comments:[]
                        },
                        {
                            user: 'mesteño',
                            replyId: 1112,
                            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                            comments:[]
                        },]
                    },]
                },
                {
                    user: 'mesteño',
                    replyId: 12,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[]
                },
                {
                    user: 'paraLLEVAR',
                    replyId: 13,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[{
                        user: 'death-scroll',
                        replyId: 131,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[]
                    },
                    {
                        user: 'mesteño',
                        replyId: 132,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[]
                    },]
                },
    
            ],
        },
        {
            title: 'cooking up some birria on the boilerplate',
            postreplyId: 2,
            user: 'spacecowboy',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
            comments: [
                {
                    user: 'death-scroll',
                    replyId: 21,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[{
                        user: 'paraLLEVAR',
                        replyId: 211,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[{
                            user: 'death-scroll',
                            replyId: 2111,
                            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                            comments:[]
                        },
                        {
                            user: 'mesteño',
                            replyId: 2112,
                            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                            comments:[]
                        },]
                    },]
                },
                {
                    user: 'mesteño',
                    replyId: 22,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[]
                },
                {
                    user: 'paraLLEVAR',
                    replyId: 23,
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                    comments:[{
                        user: 'death-scroll',
                        replyId: 231,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[]
                    },
                    {
                        user: 'mesteño',
                        replyId: 232,
                        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quidem, nobis ipsa, asperiores quo odit doloribus ea quod aperiam ipsum eligendi labore nisi tempore rerum commodi accusantium voluptates optio aut!',
                        comments:[]
                    },]
                },
    
            ],
        },
    ]

	return (
        // <div className="grid">
        //     <Terminal/>
        //     <div className="grid overflow-hidden w-full h-full items-center">
        //     <div className="row-start-1 col-start-1 justify-self-center">
        //         {posts.map((post)=> {
        //             return(
        //                     <PostCard key={post.postId} post={post}/>
        //             )
        //         })}
        //     </div>
        //     </div>
        // </div>
        <div>
            <h1 className="font-bold text-3xl">Your Feed</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6">
                {/* Feed */}
                {/* Cantinet Info */}
                <MenuButton
                    name="Create Cantinet"
                    link="/cantinet/create"
                    style=""
                />
            </div>
        </div>
       
	)
  }