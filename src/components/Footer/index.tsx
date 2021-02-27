import React from "react";
import {Container, List, Item, Link, Copyright} from "./style";
import {Parent} from "../../interfaces";
import {Components} from "./Components";

export const Footer: React.FC<Parent> & Components = ({children}) => 
    <Container>{children}</Container>;

Footer.List = ({children}) => <List>{children}</List>;

Footer.Item = ({children}) => <Item>{children}</Item>;

Footer.Link = ({children}) => <Link>{children}</Link>;

Footer.Copyright = ({children}) => <Copyright>{children}</Copyright>;
