import { GEO } from "../component/map/mapSetup"

export const userLocation =   new Promise<GEO>((resolve,reject)=>{
    window.navigator.geolocation.getCurrentPosition((suc)=>{
        if(suc.coords) resolve(suc.coords)
        else resolve({latitude:0,longitude:0}) 
    })
})