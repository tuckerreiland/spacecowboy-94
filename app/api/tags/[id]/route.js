export const dynamic = 'force-dynamic' // defaults to auto

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET(req, {params}) {
    const id = params.id
    try {
        const res = await db.tag.findUnique({
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
        if (data.name) {
            update.data = {
                ...data,
                slug: toKebabCase(data.name)
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
        
        if (data.posts) {
            update.data .posts = {
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

        const res = await db.tag.update(update)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const id = params.id
    try {
        await db.tag.update({
            where: {
                id: id
            },
            data: {
                collections: {
                    set:[]
                },
                products: {
                    set:[]
                },
                posts: {
                    set:[]
                },
            }
        })
        const res = await db.tag.delete({
            where: {
                id: id
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}