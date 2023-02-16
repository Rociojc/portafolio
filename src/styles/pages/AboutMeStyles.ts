import styled from "styled-components";

export const AboutContainer = styled.main`
    /* border: 1px solid black; */

    padding: 20px;
    display: grid;
    gap: 20px;
    justify-items: center;

    @media (min-width: 768px) {
        padding: 30px;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const AboutTitle = styled.div`
    @media (min-width: 768px) {
        grid-column: 1 / 3;
    }
`

export const AboutImage = styled.div`
    @media (min-width: 768px) {
        grid-column: 2 / 3;
    }
`

export const AboutInfo = styled.div`
    @media (min-width: 768px) {
        grid-row: 2 / 3;
    }
`