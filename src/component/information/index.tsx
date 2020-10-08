import React, { FC, useEffect, useState } from 'react'
import { Container, Text } from './style'

interface iProps {
    text: string;
    details: string;
}

export default function Info(props: iProps){

    const [state, setState] = useState<iProps>({
        text: "",
        details: ""
    })

    useEffect(() => {
        setState({
            text: props.text,
            details: props.details
        }) 
    }, [props])

    
    return <Container>
        <Text style={{fontSize:15, color:"darkgrey"}}>{state.details}</Text>
        <Text style={{
            fontWeight:800,
            fontSize:26,
        }}>{state.text}</Text>

    </Container>
}
