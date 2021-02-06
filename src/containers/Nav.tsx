import React from "react";
import {Nav} from "../components";
import {BiMovie, BiMenu} from "react-icons/bi";

export const NavContainer: React.FC = () => (
    <Nav>
        <Nav.Bar>
            <Nav.Logo><BiMovie/></Nav.Logo>
            <Nav.CollapseToggler><BiMenu/></Nav.CollapseToggler>
        </Nav.Bar>
        <Nav.Collapse>
            <Nav.List>
                <Nav.Item>
                    <Nav.Dropdown>
                        <Nav.DropdownToggler>Movies</Nav.DropdownToggler>
                        <Nav.SubList>
                            <Nav.SubItem>Popular</Nav.SubItem>
                            <Nav.SubItem>Now Playing</Nav.SubItem>
                            <Nav.SubItem>Upcoming</Nav.SubItem>
                            <Nav.SubItem>Top Rated</Nav.SubItem>
                        </Nav.SubList>
                    </Nav.Dropdown>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Dropdown>
                        <Nav.DropdownToggler>TV Shows</Nav.DropdownToggler>
                        <Nav.SubList>
                            <Nav.SubItem>Popular</Nav.SubItem>
                            <Nav.SubItem>Airing Today</Nav.SubItem>
                            <Nav.SubItem>On TV</Nav.SubItem>
                            <Nav.SubItem>Top Rated</Nav.SubItem>
                        </Nav.SubList>
                    </Nav.Dropdown>
                </Nav.Item>
                <Nav.Item>People</Nav.Item>
            </Nav.List>
        </Nav.Collapse>
    </Nav>
);