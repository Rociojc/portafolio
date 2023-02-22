import styled from "styled-components";

export const ButtonMobile = styled.button`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.color};
    box-shadow: -6px -6px 8px rgba(255, 255, 255, 0.1), -3px -3px 3px rgba(255, 255, 255, 0.1), 1px 1px 2px rgba(0, 0, 0, 0.25), 3px 3px 7px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    &:hover {
        background-color: #F5A09F;
    }
`

export const ButtonText = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    cursor: pointer;
    transition:  0.3s ease-in-out;

    &:hover::after,
    &.active::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #F5A09F;
        position: absolute;
        left: 0;
    }
`