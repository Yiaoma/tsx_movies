import React, { createContext, useContext} from "react";
import {VscClose} from "react-icons/vsc";
import {BiMenu} from "react-icons/bi";
import {useHide, useCollapse, useDropdown, useTransparent} from "../../hooks";
import {Collapsable, Dropdownable, Children} from "../../interfaces";
import {Components} from "./Components";
import {
    Container,
    Bar,
    Logo,
    CollapseToggler,
    Collapse,
    List,
    Item,
    Dropdown,
    DropdownToggler,
    SubList,
    SubItem,
    Link
} from "./style";

const CollapseContext = createContext<Collapsable>({});
const DropdownContext = createContext<Dropdownable>({});

export const Nav: React.FC<Children> & Components = ({children}) => {
    const {isCollapsed, handleCollapse} = useCollapse();
    const {isTransparent} = useTransparent();
    const {isHidden} = useHide();

    return (
        <CollapseContext.Provider value={{isCollapsed, handleCollapse}}>
            <Container isCollapsed={isCollapsed} isTransparent={isTransparent} isHidden={isHidden}>{children}</Container>
        </CollapseContext.Provider>
    );
}

Nav.Bar = ({children}) => <Bar>{children}</Bar>;

Nav.Logo = ({children, to}) => <Logo to={to}>{children}</Logo>;

Nav.CollapseToggler = () => {
    const {isCollapsed, handleCollapse} = useContext(CollapseContext);

    return <CollapseToggler onClick={handleCollapse}>{isCollapsed ? <VscClose/>  : <BiMenu/>}</CollapseToggler>
}

Nav.Collapse = ({children}) => {
    const {isCollapsed} = useContext(CollapseContext);

    return <Collapse isCollapsed={isCollapsed}>{children}</Collapse>;
}

Nav.List = ({children}) => <List>{children}</List>;

Nav.Item = ({children}) => <Item>{children}</Item>;

Nav.Dropdown = ({children}) => {
    const {isDropped, handleDropdown} = useDropdown();

    return (
        <DropdownContext.Provider value={{isDropped, handleDropdown}}>
            <Dropdown>{children}</Dropdown>
        </DropdownContext.Provider>
    );
}

Nav.DropdownToggler = ({children}) => {
    const {isDropped, handleDropdown} = useContext(DropdownContext);

    return <DropdownToggler onClick={handleDropdown}>{children} {isDropped ? "▴" : "▾"}</DropdownToggler>
}

Nav.SubList = ({children}) => {
    const {isDropped} = useContext(DropdownContext);

    return <SubList isDropped={isDropped}>{children}</SubList>;
}

Nav.SubItem = ({children}) => <SubItem>{children}</SubItem>;

Nav.Link = ({children, to}) => <Link to={to}>{children}</Link>;