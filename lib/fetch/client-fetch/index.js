import useSWR from "swr"

const fetcher = async (type, url) => {
    const res = await fetch(url)
    if (type === 'image'){
        return  await res.blob()
    }
    return await res.json()
}

export const clientFetch = async (url) => {
    return useSWR(url, fetcher)
}