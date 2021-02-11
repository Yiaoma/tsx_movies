import React from "react";
import {Nav} from "../components";
import {BiMovie, BiMenu} from "react-icons/bi";
const navData = require("../data/nav.json");

// TODO: MOVE THIS INTERFACE
interface NavList {
    id: string;
    to: string;
    title: string;
    type?: string;
    categories?: string[];
}

export const NavContainer: React.FC = () => (
    <Nav>
        <Nav.Bar>
            {/* TODO: No static strings */}
            <Nav.Logo to="/"><BiMovie/></Nav.Logo>
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
                                    {item.categories.map(category => <Nav.SubItem key={category[0]}>
                                        <Nav.Link to={`/${item.type}/${category[1]}`}>{category[0]}</Nav.Link>
                                    </Nav.SubItem>)}
                                    </Nav.SubList>
                                </Nav.Dropdown>
                            </Nav.Item>
                        );
                    } else {
                        return (
                            <Nav.Item key={item.id}>
                                <Nav.Link to={`/${item.type}`}>{item.title}</Nav.Link>
                            </Nav.Item>
                        );
                    }})}
            </Nav.List>
        </Nav.Collapse>
    </Nav>
);