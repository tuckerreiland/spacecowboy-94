export const queryParse = (params) => {
    if(params){
        const where = {}
        params.forEach((value, key)=>{
            return where[key]={
                some:{
                    slug:{
                        in: value.split(' ')
                    }
                }
            }
        })
        return {where: where}
    }
}