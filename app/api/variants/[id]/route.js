export const dynamic = 'force-dynamic' // defaults to auto

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET(req, {params}) {
    const id = params.id
    try {
        const res = await db.variant.findUnique({
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

        if (data.products) {
            update.data.products = {
                set: [],
                connect: data.products.map((product)=>{
                    return {id: product}
                })
            }
        }

        if (data.sizes){
            create.data.sizes = {
                connect: data.sizes.map((size)=> {
                    return {id: size}
                })
            }
        }
        if (data.colors){
            create.data.colors = {
                connect: data.colors.map((color)=> {
                    return {id: color}
                })
            }
        }
        if (data.options){
            create.data.options = {
                connect: data.options.map((option)=> {
                    return {id: option}
                })
            }
        }
        
        const res = await db.variant.update(update)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const id = params.id
    try {
        await db.variant.update({
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
                products: {
                    set:[]
                },
                options: {
                    set:[]
                },
                colors: {
                    set:[]
                },
                sizes: {
                    set:[]
                },
            }
        })
        const res = await db.variant.delete({
            where: {
                id: id
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}