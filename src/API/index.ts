import Axios from "axios"

export const getRequest = async (url:string="")=>{
    try {
        const {data} = await Axios.get(url)
        return {data}
    } catch (error) {
        return {error:error.message}
    }
}

export const getPosition = async (query:string="")=>{
    console.log("the query",query);
    
    return getRequest(`
    https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_GEOLOCATIONAPIKEY as string}&ipAddress=${query}
    `)
}