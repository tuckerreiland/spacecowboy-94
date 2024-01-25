export const dynamic = 'force-dynamic' // defaults to auto

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET(req, {params}) {
    const id = params.id
    try {
        const res = await db.post.findUnique({
            where: {
                id: id
            },
            include: {
                collections: true
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
                collections: {
                    include: {
                        posts: true
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

        if (data.collections) {
            update.data.collections = {
                set: [],
                connect: data.collections.map((collection)=>{
                    return {id: collection}
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
        
        const res = await db.post.update(update)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const id = params.id
    try {
        await db.post.update({
            where: {
                id: id
            },
            data: {
                collections: {
                    set:[]
                },
                tags: {
                    set:[]
                },
            }
        })
        const res = await db.post.delete({
            where: {
                id: id
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}