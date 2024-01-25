const fetcher = async (...args) => {
    const res = await fetch(...args)
    return await res.json()
}

export const clientFetch = async (url) => {
    return useSWR(url, fetcher)
}