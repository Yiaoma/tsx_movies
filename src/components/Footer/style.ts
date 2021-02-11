import styled from "styled-components";
import {LIGHT, DARK} from "../../constants/colours";

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 2em 1em;
    background-color: ${DARK};
    color: ${LIGHT};
    align-items: center;
`;

export const List = styled.ul`
    display: flex;
    list-style: none;
    margin-bottom: 1em;
    width: 50%;
    justify-content: space-between;
`;

export const Item = styled.li``;

export const Link = styled.a`
    color: ${LIGHT};
    font-size: 2rem;
`;

export const Copyright = styled.p`
    font-size: .7rem;
`;