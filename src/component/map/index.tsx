import React, { useEffect, useState , useContext} from 'react'
import { Context } from '../../screen';

import mapSetup from './mapSetup';
import { Container } from "./index.style";

export default function Map(): JSX.Element {
    //it takes the context as argument
    const {longitude,latitude} = useContext(Context)
    const [height, setheight] = useState(50)
    
    useEffect(() => {
        setMapHeight()
        console.log("context latiude",latitude);
        // setstate({...state,coord:{longitude,latitude}})
        mapSetup({latitude,longitude,active:true}) 
        // window.addEventListener("resize",setMapHeight)

        // return (()=>window.removeEventListener("resize",setMapHeight))

    }, [longitude,latitude])

    const setMapHeight = () =>{
        let height = window.innerHeight - 200
        setheight(height)
    }
  
    return (
        <Container id="map" style={{height:window.innerHeight-200}} >
        </Container>
    )
}
