export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET() {
    try {
        const res = await db.tag.findMany()
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}

export async function POST(req) {
    try {
        const data = await req.json()
        const create = {
            data: {
                ...data,
                slug: toKebabCase(data.title),
            }
        }
        if (data.collections){
            create.data.collections = {
                connect: data.collections.map((collection)=> {
                    return {id: collection}
                })
            }
        }
        if (data.posts){
            create.data.posts = {
                connect: data.posts.map((post)=> {
                    return {id: post}
                })
            }
        }
        if (data.products){
            create.data.products = {
                connect: data.products.map((product)=> {
                    return {id: product}
                })
            }
        }
        const res = await db.tag.create(create)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}