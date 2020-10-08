import React, { createContext, useState,useEffect } from 'react'
import Header from '../component/header'
import Map from '../component/map'
import { userLocation } from '../function/getposition'

interface CONTEXT{
    latitude:number; 
    longitude:number;
    timezone:string;
    ip:string;
    isp:string;
    region:string;
    setstate:any;
}

export const Context = createContext<CONTEXT>({
    latitude:0,
    longitude:0,
    timezone:"",
    ip:"",
    isp:"",
    region:"",
    setstate:()=>{}
})

export default function Main() {
    const [state, setstate] = useState({
        longitude:0,
        latitude:0,
        timezone:"",
        ip:"",
        isp:"",
        region:"",
    })

    useEffect(() => {
        (async ()=>{
            const {longitude,latitude} = await userLocation
            // console.log("the geo",geo);
            
            setstate({...state,longitude,latitude})
        })()
    }, [])

    return (
        <Context.Provider value={{...state,setstate}}>
            <div style={{width:"100%"}}>
                <Header />
                <Map />
            </div>
        </Context.Provider>
        )
}
