export const dynamic = 'force-dynamic' // defaults to auto

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET(req, {params}) {
    const id = params.id
    try {
        const res = await db.blogCollection.findUnique({
            where: {
                id: id
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
    const id = params.id
    try {
        const data = await req.json()
        const update = {
            where: {
                id: id
            },
            data:{
                ...data,
            },
            include:{
                posts: {
                    include: {
                        collections: true
                    }
                }
            }
        }
        if (data.title) {
            update.data = {
                ...data,
                slug: toKebabCase(data.title)
            }
        }
        if (data.posts) {
            update.data.posts = {
                set: [],
                connect: data.posts.map((post)=>{
                    return {id: post}
                })
            }
        }
        if (data.products) {
            update.data.products = {
                set: [],
                connect: data.products.map((product)=>{
                    return {id: product}
                })
            }
        }
        if (data.tags) {
            update.data.tags = {
                set: [],
                connect: data.tags.map((tag)=>{
                    return {id: tag}
                })
            }
        }
        const res = await db.blogCollection.update(update)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const id = params.id
    try {
        const posts = await db.post.findMany({
            where:{
                collections:{
                    some:{
                        id: id
                    }
                }
            },
        })
        await db.blogCollection.update({
            where: {
                id: id
            },
            data: {
                posts: {
                    set:[]
                },
                tags: {
                    set:[]
                },
            }
        })
        const res = await db.blogCollection.delete({
            where: {
                id: id
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}