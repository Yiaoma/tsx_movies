import React from "react";
import {Container, Image, Title, Text} from "./style";
import {Parent} from "../../interfaces";
import {Components} from "./Components";

export const Card: React.FC<Parent> & Components = ({children}) => 
    <Container>{children}</Container>;

Card.Image = ({src}) => <Image src={src}/>;

Card.Title = ({children}) => <Title>{children}</Title>;

Card.Text = ({children}) => <Text>{children}</Text>;