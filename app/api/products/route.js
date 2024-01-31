export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { queryParse } from "@/lib/utils/api"
import { db } from "@/prisma"

export async function GET(req) {
    try {
        const where = queryParse(req.nextUrl.searchParams)
        const res = await db.product.findMany({...where})
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
                    return {id: collection}
                })
            }
        }
        if (data.tags){
            create.data.tags = {
                connect: data.tags.map((tag)=> {
                    return {id: tag}
                })
            }
        }
        if (data.variants){
            create.data.variants = {
                connect: data.variants.map((variant)=> {
                    return {id: variant}
                })
            }
        }
        const res = await db.product.create(create)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}