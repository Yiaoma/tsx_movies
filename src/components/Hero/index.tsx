import React from "react";
import {Background, Title} from "./style";

interface RestProps {
    [rest: string]: any;
}

interface CompoundComponents {
    Title: React.FC<RestProps>;
}

export const Hero: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => 
    <Background {...props}>{children}</Background>;

Hero.Title = ({children, ...props}) => <Title {...props}>{children}</Title>;