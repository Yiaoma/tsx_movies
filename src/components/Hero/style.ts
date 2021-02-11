import styled from "styled-components";
import {BackgroundImage} from "../../interfaces";

export const Background = styled.div<BackgroundImage>`
    display: flex;
    background-image: url(${({href}) => href});
    height: auto;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    height: 500px;
`;

export const Title = styled.h1`
`;