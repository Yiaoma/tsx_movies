import React from "react";
import {Container, Title, Base, Item} from "./style";

interface RestProps {
    [rest: string]: any;
}

interface CompoundComponents {
    Title: React.FC<RestProps>;
    Base: React.FC<RestProps>;
    Item: React.FC<RestProps>;
}

export const List: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

List.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

List.Base = ({children, ...props}) => <Base {...props}>{children}</Base>;

List.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;