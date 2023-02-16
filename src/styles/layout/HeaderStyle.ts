import styled from "styled-components";

export const Header = styled.header`
    // border: 1px solid black;

    display: flex;
    justify-content: center;
    background-color: ${props => props.color};
    padding: 30px 20px 20px;

    @media (min-width: 768px) {
        justify-content: flex-end;
        padding: 30px;
    }
`