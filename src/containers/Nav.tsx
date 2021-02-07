import React from "react";
import {Nav} from "../components";
import {BiMovie, BiMenu} from "react-icons/bi";
const navData = require("../data/nav.json");

interface NavList {
    id: string;
    title: string;
    categories?: string[];
}

export const NavContainer: React.FC = () => (
    <Nav>
        <Nav.Bar>
            <Nav.Logo><BiMovie/></Nav.Logo>
            <Nav.CollapseToggler><BiMenu/></Nav.CollapseToggler>
        </Nav.Bar>
        <Nav.Collapse>
            <Nav.List>
                {navData.map((item: NavList) => {
                    if (item.categories) {
                        return (
                            <Nav.Item key={item.id}>
                                <Nav.Dropdown>
                                    <Nav.DropdownToggler>{item.title}</Nav.DropdownToggler>
                                    <Nav.SubList>
                                    {item.categories.map(category => <Nav.SubItem key={category}>{category}</Nav.SubItem>)}
                                    </Nav.SubList>
                                </Nav.Dropdown>
                            </Nav.Item>
                        );
                    } else {
                        return <Nav.Item key={item.id}>{item.title}</Nav.Item>
                    }})}
            </Nav.List>
        </Nav.Collapse>
    </Nav>
);