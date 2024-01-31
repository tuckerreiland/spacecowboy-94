export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { queryParse } from "@/lib/utils/api"
import { db } from "@/prisma"

export async function GET(req) {
    try {
        const where = queryParse(req.nextUrl.searchParams)
        const res = await db.collection.findMany({...where})
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
        if (data.tags){
            create.data.tags = {
                connect: data.tags.map((tag)=> {
                    return {id: tag}
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
        const res = await db.collection.create(create)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}