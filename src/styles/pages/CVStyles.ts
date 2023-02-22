import styled from "styled-components";

export const CVContainer = styled.main`
    /* border: 1px solid black; */

    padding: 20px;
    text-align: center;
    max-width: 900px;
    margin: auto;

    @media (min-width: 768px) {
        padding: 30px;
    }
`

export const CVInfoGeneral = styled.section`
    margin-top: 20px;
    text-align: justify;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
`

export const CVInfoDetailed = styled.div`
    padding-top: 15px;
`

export const Lista = styled.ul`
    padding:  0 20px;
`