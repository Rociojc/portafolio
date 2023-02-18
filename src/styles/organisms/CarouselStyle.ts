import styled from "styled-components";

export const CardsContainer = styled.div`
    overflow: hidden;
    position: relative;
`

export const BotonesContainer = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
`

export const BotonCarousel = styled.button`
    border: none;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: auto 0;
    display: flex;
`