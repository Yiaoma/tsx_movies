import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
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

export const Collapse = styled.div`
    display: flex;
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
    font-size: 1.2rem;
    outline: none;
`;

export const SubList = styled.ul`
    font-size: 1.1rem;
    list-style: none;
    margin-left: 1em;
    padding-top: .5em;
`;

export const SubItem = styled.li`
    padding: .3em 0;
`;
