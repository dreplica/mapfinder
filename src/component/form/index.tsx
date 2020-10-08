import React, { ChangeEvent, FC, MouseEvent, useState, useContext } from 'react'
import { getPosition } from '../../API';
import { Context } from '../../screen';
import { Container, Input, Button } from "./index.style";


const Form: FC = () => {
    const [state, setstate] = useState<string>("")
    const { setstate: stateSet } = useContext(Context)

    const getIpAddress = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        setstate(text)
    }

    const getAddress = async (e: MouseEvent) => {
        e.preventDefault()
        try {
            const { data } = await getPosition(state)
            const { location, ip, isp } = data
            const { lat, lng, region, timezone } = location
            stateSet({ longitude: lng, latitude: lat, timezone, ip, isp, region, })

            console.group("the address", data)
        } catch (error) {
            // stateSet({longitude:})
            console.log("sorry can't access this address")
        }
    }

    return <Container>
        <Input placeholder="192.168.1.218" value={state} onChange={getIpAddress} />
        <Button onClick={getAddress}> b </Button>
    </Container>
}

export default Form