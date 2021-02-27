import React from "react";
import {Container, Title, Base, Item} from "./style";
import {Parent} from "../../interfaces";
import {Components} from "./Components";

export const List: React.FC<Parent> & Components = ({children}) => 
    <Container>{children}</Container>;

List.Title = ({children}) => <Title>{children}</Title>;

List.Base = ({children}) => <Base>{children}</Base>;

List.Item = ({children}) => <Item>{children}</Item>;