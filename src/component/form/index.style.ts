import styled from "styled-components";

export const Container = styled.form`
    max-width:50%;
    min-width:70%;
    height:auto;
    display:flex;
    margin-top:10px;
    justify-content:center;
`;

export const Input = styled.input`
    width:70%;
    height:50px;
    padding:10px;
    border-radius:10px 0px 0px 10px;
    border:0px; 
    outline-width:0;
    `;

export const Button = styled.button`
    width:50px;
    height:50px;
    border-radius:0px 10px 10px 0px;
    background:#000;
    color:#fff;
    border:0px;
    outline-width:0;

    :hover{
        background:#333;
    }
`;