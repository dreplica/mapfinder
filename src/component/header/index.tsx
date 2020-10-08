import React, { useContext } from 'react'
import Form from '../form'
import { Text } from '../information/style'
import { Container, Image, Content} from './index.style'
import Information from "../information"
import { Context } from '../../screen'

enum KEYS{
    "IP ADDRESS",
    LOCATION,
    TIMEZONE,
    ISP
}

export default function Header():JSX.Element{
const {ip,isp,region,timezone} = useContext(Context)
    // const keys = typeof key KEYS;
console.log('{ip,isp,region,timezone}', {ip,isp,region,timezone})
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
            <Information details="IP ADDRESS" text={ip}/>
            <Information details="LOCATION" text={region}/>
            <Information details="TIMEZONE" text={timezone}/>
            <Information details="ISP" text={isp}/>
        </Content>
    </Container>
}
