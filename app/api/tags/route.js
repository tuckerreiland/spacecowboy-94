export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { queryParse } from "@/lib/utils/api"
import { db } from "@/prisma"

export async function GET() {
    try {
        const where = queryParse(req.nextUrl.searchParams)
        const res = await db.tag.findMany({
            ...where,
            include:{
                collections: true
            }
        })
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
                slug: toKebabCase(data.name),
            }
        }
        if (data.collections){
            create.data.collections = {
                connect: data.collections.map((collection)=> {
                    return {slug: collection}
                })
            }
        }
        if (data.posts){
            create.data.posts = {
                connect: data.posts.map((post)=> {
                    return {slug: post}
                })
            }
        }
        if (data.products){
            create.data.products = {
                connect: data.products.map((product)=> {
                    return {slug: product}
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