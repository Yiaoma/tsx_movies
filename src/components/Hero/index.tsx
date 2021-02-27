import React from "react";
import {Background, Title} from "./style";
import {Parent, Image} from "../../interfaces";
import {Components} from "./Components";

export const Hero: React.FC<Parent & Image> & Components = ({children, src}) => 
    <Background src={src}>{children}</Background>;

Hero.Title = ({children}) => <Title>{children}</Title>;