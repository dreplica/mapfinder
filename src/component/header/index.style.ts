import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:400px;
    position: relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:url("/pattern-bg.png") center/cover no-repeat ;
`;

export const Image = styled.img`
    width:100%;
    height:100%;
    z-index:-999;
    position:absolute;
`;

export const Content = styled.div`
    padding:15px;
    border-radius:15px;
    min-height:150px;
    height:auto;
    width:70%;
    display:flex;
    flex-flow: row wrap;
    justify-content:flex-start;
    align-items:center;
    position: absolute;
    top:80%;
    z-index:9999;
    background:white;

@media (max-width:750px){
    width:50%;
}
    
`;
