import React from "react";
import {Container, Image, Title, Text} from "./style";

interface RestProps {
    [rest: string]: any;
}

interface CompoundComponents {
    Image: React.FC<RestProps>;
    Title: React.FC<RestProps>;
    Text: React.FC<RestProps>;
}

export const Card: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

Card.Image = ({children, ...props}) => <Image {...props}>{children}</Image>;

Card.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;

Card.Text = ({children, ...props}) => <Text {...props}>{children}</Text>;