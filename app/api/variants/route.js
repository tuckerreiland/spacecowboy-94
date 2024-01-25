export const dynamic = 'force-dynamic'

import { toKebabCase } from "@/lib/utils"
import { db } from "@/prisma"

export async function GET() {
    try {
        const res = await db.variant.findMany()
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
        if (data.products){
            create.data.products = {
                connect: data.products.map((product)=> {
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
        const res = await db.variant.create(create)
        return Response.json(res)
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}