import React from "react";
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

export const Nav: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

Nav.Bar = ({children, ...props}) => <Bar {...props}>{children}</Bar>;

Nav.Logo = ({children, ...props}) => <Logo {...props}>{children}</Logo>;

Nav.CollapseToggler = ({children, ...props}) => <CollapseToggler {...props}>{children}</CollapseToggler>;

Nav.Collapse = ({children, ...props}) => <Collapse {...props}>{children}</Collapse>;

Nav.List = ({children, ...props}) => <List {...props}>{children}</List>;

Nav.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Nav.Dropdown = ({children, ...props}) => <Dropdown {...props}>{children}</Dropdown>;

Nav.DropdownToggler = ({children, ...props}) => <DropdownToggler {...props}>{children}</DropdownToggler>;

Nav.SubList = ({children, ...props}) => <SubList {...props}>{children}</SubList>;

Nav.SubItem = ({children, ...props}) => <SubItem {...props}>{children}</SubItem>;