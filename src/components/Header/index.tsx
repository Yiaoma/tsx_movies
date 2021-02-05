import React from "react";
import {Container} from "./style";

export const Header: React.FC = ({children, ...props}) => <Container {...props}>{children}</Container>;