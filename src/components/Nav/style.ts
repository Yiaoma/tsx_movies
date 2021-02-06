import styled from "styled-components";
import {LIGHT} from "../../constants/colours";

interface Collapse {
    isCollapsed: boolean | undefined;
}

interface Hide {
    isHidden: boolean;
}

interface Dropdown {
    isDropped: boolean | undefined;
}

export const Container = styled.nav<Hide>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    transform: ${({isHidden}) => isHidden ? "translateY(-100%)" : "translateY(0)"};
    flex-direction: column;
    background-color: ${LIGHT};
    transition: all 1s ease;
    box-shadow: 0 5px 5px rgba(0,0,0,.1);
`;

export const Bar = styled.div`
    display: flex;
    padding: 1em;
    justify-content: space-between;
`;

export const Logo = styled.div`
    display: flex;
    font-size: 1.7rem;
    align-items: center;
`;

export const CollapseToggler = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    border: none;
    outline: none;
`;

export const Collapse = styled.div<Collapse>`
    display: ${({isCollapsed}) => isCollapsed ? "flex" : "none"};
    flex-direction: column;
    padding: 0 1em 1em;
`;

export const List = styled.ul`
    list-style: none;
    margin-left: 1em;
`;

export const Item = styled.li`
    font-size: 1.3rem;
    padding: .3em 0;
`;

export const Dropdown = styled.div``;

export const DropdownToggler = styled.button`
    border: none;
    font-size: 1.3rem;
    outline: none;
`;

export const SubList = styled.ul<Dropdown>`
    display: ${({isDropped}) => isDropped ? "flex" : "none"};
    flex-direction: column;
    font-size: 1.1rem;
    list-style: none;
    margin-left: 1em;
    padding-top: .5em;
`;

export const SubItem = styled.li`
    padding: .3em 0;
`;
