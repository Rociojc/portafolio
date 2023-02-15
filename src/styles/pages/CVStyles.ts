import styled from "styled-components";

export const CVContainer = styled.main`
    border: 1px solid black;

    padding: 20px;
    text-align: center;
`

export const CVInfoGeneral = styled.section`
    margin-top: 20px;
    text-align: justify;
    display: grid;
    gap: 30px;
`

export const CVCaption = styled.div`
    display: flex;
    gap: 10px;
    padding: 5px;
    align-items: center;
    border-top: 2px solid ${props => props.color};
    border-bottom: 2px solid ${props => props.color};
`

export const CVInfoDetailed = styled.div`
    padding-top: 15px;
`