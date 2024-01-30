const queryBuilder = (query) => {
    let queryString ='?'
    Object.keys(query).map((field)=>{
        let fieldString = `${field}=`
        query[field].map((value, index)=>{
            if(index === query[field].length-1){
                return fieldString = fieldString + value
            }
            return fieldString = fieldString + `${value}+`
        })
        queryString = queryString+fieldString
    })
    return queryString
}

export const serverFetch = async (path, query, headers) => {
    const url = query?`${path}${queryBuilder(query)}`:path
    const res = await fetch(`${process.env.API_URL}/${url}`, headers)
    const data = await res.json()
    return data
}