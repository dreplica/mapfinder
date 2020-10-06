import styled from "styled-components";

export const Container = styled.div`
    /* min-width:250px; */
    width:25%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media (max-width:750px){
        margin-bottom:15px;
        width:100%;
    }
`

export const Text = styled.span``