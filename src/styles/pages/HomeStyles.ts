import styled from "styled-components";

export const MainContainer = styled.main`
    // border: 1px solid black;

    /* padding: 30px 0; */
    /* text-align: center; */
`

export const Portada = styled.section`
    /* border: 1px solid black; */

    width: 100%;
    height: 330px;
    background-color: ${props => props.color};
    padding: 20px;
`

export const GridPortada = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    align-items: center;
    width: min(100%, 900px);
    margin: auto;
`

export const TituloPortada = styled.div`
    /* border: 1px solid black; */

    text-align: center;
`

export const ImagenPortada = styled.div`
    /* border: 1px solid black; */

    width: 210px;
    height: 220px;

    @media screen and (min-width: 768px) {
        width: initial;
    }
`

export const Proyectos = styled.section`
    /* border: 1px solid black; */

    padding: 20px 0;
    text-align: center;
    width: 425px;

    @media screen and (min-width: 768px) {
        width: 100%;
    }
`