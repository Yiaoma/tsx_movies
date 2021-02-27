import React from "react";
import {Container} from "./style";
import {Parent} from "../../interfaces";

export const Header: React.FC<Parent> = ({children}) => <Container>{children}</Container>;