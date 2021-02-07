import React from "react";
import {Container} from "./style";
import {Children} from "../../interfaces";

export const Header: React.FC<Children> = ({children}) => <Container>{children}</Container>;