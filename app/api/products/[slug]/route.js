export const dynamic = 'force-dynamic' // defaults to auto

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET(req, {params}) {
    const slug = params.slug
    try {
        const res = await db.product.findUnique({
            where: {
                slug: slug
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
    const slug = params.slug
    try {
        const data = await req.json()
        const update = {
            where: {
                slug: slug
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

        if (data.name){
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
        
        if (data.tags) {
            update.data.tags = {
                set: [],
                connect: data.tags.map((tag)=>{
                    return {id: tag}
                })
            }
        }

        if (data.variants) {
            update.data.variants = {
                set: [],
                connect: data.variants.map((variant)=>{
                    return {id: variant}
                })
            }
        }
        
        const res = await db.product.update(update)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const slug = params.slug
    try {
        await db.product.update({
            where: {
                slug: slug
            },
            data: {
                collections: {
                    set:[]
                },
                tags: {
                    set:[]
                },
                variants: {
                    set:[]
                },
            }
        })
        const res = await db.product.delete({
            where: {
                slug: slug
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}