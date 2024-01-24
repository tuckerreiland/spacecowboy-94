export const dynamic = 'force-dynamic' // defaults to auto

import { db } from "@/prisma"

export async function GET(req, {params}) {
    console.log('id', params.id)
    const id = params.id
    try {
        const res = await db.post.findUnique({
            where: {
                id: id
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
        const res = await db.post.update({
            where: {
                id: id
            },
            data: data
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}

export async function DELETE(req, {params}) {
    const id = params.id
    try {
        const res = await db.post.delete({
            where: {
                id: id
            }
        })
        return Response.json(res)
    } catch (error) {
        return Response.json({error})
    }
}