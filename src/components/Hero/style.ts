import styled from "styled-components";
import {Image} from "../../interfaces";

export const Background = styled.div<Image>`
    display: flex;
    background-image: url(${({src}) => src});
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