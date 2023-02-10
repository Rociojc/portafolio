import styled from "styled-components";

export const CardStyle = styled.article`
    width: 200px;
    height: 250px;
    padding: 15px;
    border-radius: 5px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    box-shadow: 7px 7px 10px rgba(245, 160, 159, 0.25);
`

export const ImageContainer = styled.div`
    width: 100%;
`

export const ListTech = styled.div`
    display: flex;
    justify-content: space-around;
`