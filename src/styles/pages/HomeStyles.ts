import styled from "styled-components";

export const Portada = styled.div`
    // border: 1px solid black;

    width: 100%;
    height: 330px;
    background-color: ${props => props.color};
    padding: 20px;
`

export const InfoPortada = styled.div`
    // border: 1px solid black;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: center;
`

export const TituloPortada = styled.div`
    text-align: center;
`

export const ImagenPortada = styled.div`
    // border: 1px solid black;

    width: 210px;
    height: 220px;
    @media screen and (min-width: 768px) {
        width: initial;
    }
`

export const MainContainer = styled.main`
    // border: 1px solid black;

    padding: 30px 0;
    text-align: center;
`