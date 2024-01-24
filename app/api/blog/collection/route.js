export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(req) {
    try {
        const data = await res.json()
        return Response.json({data})
    } catch (error) {
        return Response.json({error})
    }
}
export async function POST(req) {
    try {
        const data = await res.json()
        return Response.json({data})
    } catch (error) {
        return Response.json({error})
    }
}