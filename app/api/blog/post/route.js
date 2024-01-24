export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET() {
    try {
        const res = await db.post.findMany()
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}

export async function POST(req) {
    try {
        const data = await req.json()
        const res = await db.post.create({
            data:{
                ...data,
                slug: toKebabCase(data.title),
                collections: {
                    connect: data.collections.map((collection)=> {
                        return {slug: collection}
                    })
                }
            }
        })
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}