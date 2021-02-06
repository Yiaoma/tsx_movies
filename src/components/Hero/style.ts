import styled from "styled-components";

interface BackgroundProps {
    src: string;
}

export const Background = styled.div<BackgroundProps>`
    display: flex;
    background-image: url(${({src}) => src});
    height: auto;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200vh;
    align-items: center;
`;

export const Title = styled.h1`
`;