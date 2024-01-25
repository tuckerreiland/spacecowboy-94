export const serverFetch = async (url, headers) => {
    const res = await fetch(`${process.env.API_URL}/${url}`, headers)
    return await res.json()
}