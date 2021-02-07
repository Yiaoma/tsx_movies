import React from "react";
import {Container, Title, Base, Item} from "./style";
import {Children} from "../../interfaces";
import {Components} from "./Components";

export const List: React.FC<Children> & Components = ({children}) => 
    <Container>{children}</Container>;

List.Title = ({children}) => <Title>{children}</Title>;

List.Base = ({children}) => <Base>{children}</Base>;

List.Item = ({children}) => <Item>{children}</Item>;