import React, { FC, useEffect, useState } from 'react'
import Form from '../form'
import { Text } from '../information/style'
import { Container, Image, Content} from './index.style'
import placeholder from "../../function/placeholder.json"
import Information from "../information"

enum KEYS{
    "IP ADDRESS",
    LOCATION,
    TIMEZONE,
    ISP
}

export default function Header():JSX.Element{

    // const keys = typeof key KEYS;

    // const PlaceValues = keys.map((item,index)=><Information 
    // key={index}
    // details={placeholder[item]}
    // />)

    return <Container>
        {/* <Image src={image} alt="background" />  */}
        <Text style={{
            color:"#fff",
            fontSize:20
        }}>IP Address Tracker</Text>
        <Form />
        <Content>
            <Information details="IP ADDRESS" text="123495995"/>
            <Information details="LOCATION" text="alabalagba"/>
            <Information details="TIMEZONE" text="UTC +456"/>
            <Information details="ISP" text="space X starlink"/>
        </Content>
    </Container>
}
