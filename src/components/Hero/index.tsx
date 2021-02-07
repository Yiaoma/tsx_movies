import React from "react";
import {Background, Title} from "./style";
import {Children, BackgroundImage} from "../../interfaces";
import {Components} from "./Components";

export const Hero: React.FC<Children & BackgroundImage> & Components = ({children, href}) => 
    <Background href={href}>{children}</Background>;

Hero.Title = ({children}) => <Title>{children}</Title>;