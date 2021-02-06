import React, { createContext, useContext} from "react";
import {VscClose} from "react-icons/vsc";
import {BiMenu} from "react-icons/bi";
import {useCollapse} from "../../hooks/useCollapse";
import {useHide} from "../../hooks/useHide";
import {useDropdown} from "../../hooks/useDropdown";
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
    SubItem
} from "./style";

interface RestProps {
    [rest: string]: any;
}

interface CompoundComponents {
    Bar: React.FC<RestProps>;
    Logo: React.FC<RestProps>;
    CollapseToggler: React.FC<RestProps>;
    Collapse: React.FC<RestProps>;
    List: React.FC<RestProps>;
    Item: React.FC<RestProps>;
    Dropdown: React.FC<RestProps>;
    DropdownToggler: React.FC<RestProps>;
    SubList: React.FC<RestProps>;
    SubItem: React.FC<RestProps>;
}

interface Collapse {
    isCollapsed: boolean;
    handleCollapse: () => void;
}

interface Dropdown {
    isDropped: boolean;
    handleDropdown: () => void;
}

const CollapseContext = createContext<Collapse | null>(null);
const DropdownContext = createContext<Dropdown | null>(null);

export const Nav: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => {
    const {isCollapsed, handleCollapse} = useCollapse();
    const {isHidden} = useHide();

    return (
        <CollapseContext.Provider value={{isCollapsed, handleCollapse}}>
            <Container isHidden={isHidden} {...props}>{children}</Container>
        </CollapseContext.Provider>
    );
}

Nav.Bar = ({children, ...props}) => <Bar {...props}>{children}</Bar>;

Nav.Logo = ({children, ...props}) => <Logo {...props}>{children}</Logo>;

Nav.CollapseToggler = ({children, ...props}) => {
    const collapseContext = useContext(CollapseContext);

    return <CollapseToggler onClick={collapseContext?.handleCollapse} {...props}>{collapseContext?.isCollapsed ? <VscClose/>  : <BiMenu/>}</CollapseToggler>
}

Nav.Collapse = ({children, ...props}) => {
    const collapseContext = useContext(CollapseContext);

    return <Collapse isCollapsed={collapseContext?.isCollapsed} {...props}>{children}</Collapse>;
}

Nav.List = ({children, ...props}) => <List {...props}>{children}</List>;

Nav.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Nav.Dropdown = ({children, ...props}) => {
    const {isDropped, handleDropdown} = useDropdown();

    return (
        <DropdownContext.Provider value={{isDropped, handleDropdown}}>
            <Dropdown {...props}>{children}</Dropdown>
        </DropdownContext.Provider>
    );
}

Nav.DropdownToggler = ({children, ...props}) => {
    const dropdownContext = useContext(DropdownContext);

    return <DropdownToggler onClick={dropdownContext?.handleDropdown} {...props}>{children}</DropdownToggler>
}

Nav.SubList = ({children, ...props}) => {
    const dropdownContext = useContext(DropdownContext);

    return <SubList isDropped={dropdownContext?.isDropped} {...props}>{children}</SubList>;
}

Nav.SubItem = ({children, ...props}) => <SubItem {...props}>{children}</SubItem>;