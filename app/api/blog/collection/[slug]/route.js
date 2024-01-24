export const dynamic = 'force-dynamic' // defaults to auto

import { db } from "@/prisma"
import { toKebabCase } from "@/lib/utils"

export async function GET(req, {params}) {
    const slug = params.slug
    try {
        const res = await db.blogCollection.findUnique({
            where: {
                slug: slug
            },
            include:{
                posts: {
                    include: {
                        collections: true
                    }
                }
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function PUT(req, {params}) {
    const slug = params.slug
    try {
        const data = await req.json()
        switch(data.title){
            case data.title: {
                const posts = await db.post.findMany({
                    where:{
                        collections:{
                            some:{
                                slug: slug
                            }
                        }
                    },
                })
                const res = await db.blogCollection.update({
                    where: {
                        slug: slug
                    },
                    data:{
                        ...data,
                        slug: toKebabCase(data.title),
                        posts: {
                            disconnect: posts.map((post)=>({
                                slug: post.slug
                            })),
                            connect: posts.map((post)=>({
                                slug: post.slug
                            }))
                        }
                    },
                    include:{
                        posts: {
                            include: {
                                collections: true
                            }
                        }
                    }
                })
                return Response.json(res)
            }
            default:
                const res = await db.blogCollection.update({
                    where: {
                        slug: slug
                    },
                    data:{
                        ...data,
                        slug: toKebabCase(data.title),
                    }
                })
                return Response.json(res)
        }
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const slug = params.slug
    try {
        const posts = await db.post.findMany({
            where:{
                collections:{
                    some:{
                        slug: slug
                    }
                }
            },
        })
        await db.blogCollection.update({
            where: {
                slug: slug
            },
            data: {
                posts: {
                    disconnect: posts.map((post)=>({
                        slug: post.slug
                    })),
                }
            }
        })
        const res = await db.blogCollection.delete({
            where: {
                slug: slug
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}