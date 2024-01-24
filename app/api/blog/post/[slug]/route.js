export const dynamic = 'force-dynamic' // defaults to auto

import { db } from "@/prisma"
import { toKebabCase } from "@/lib/utils"

export async function GET(req, {params}) {
    const slug = params.slug
    try {
        const res = await db.post.findUnique({
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
        console.log(data)
        // TODO: add idn condition for updating collections on a post
        switch(data){
            case data.title: {
                const collections = await db.blogCollection.findMany({
                    where:{
                        posts:{
                            some:{
                                slug: slug
                            }
                        }
                    },
                })
                const res = await db.post.update({
                    where: {
                        slug: slug
                    },
                    data:{
                        ...data,
                        slug: toKebabCase(data.title),
                        collections: {
                            disconnect: collections.map((collection)=>({
                                slug: collection.slug
                            })),
                            connect: collections.map((collection)=>({
                                slug: collection.slug
                            }))
                        }
                    },
                    include:{
                        collections: {
                            include: {
                                posts: true
                            }
                        }
                    }
                })
                return Response.json(res)
            }
            default: { 
                const res = await db.post.update({
                    where: {
                        slug: slug
                    },
                    data: data
                })
                return Response.json(res)
            }
        }
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const slug = params.slug
    try {
        const collections = await db.blogCollection.findMany({
            where:{
                posts:{
                    some:{
                        slug: slug
                    }
                }
            },
        })
        await db.post.update({
            where: {
                slug: slug
            },
            data: {
                collections: {
                    disconnect: collections.map((collection)=>({
                        slug: collection.slug
                    })),
                }
            }
        })
        const res = await db.post.delete({
            where: {
                slug: slug
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}