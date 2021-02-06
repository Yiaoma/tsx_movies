import React from "react";
import {Container} from "./style";

interface RestProps {
    [rest: string]: any;
}

export const Main: React.FC<RestProps> = ({children, ...props}) => <Container {...props}>{children}</Container>;