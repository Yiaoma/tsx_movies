import React from "react";
import {Container} from "./style";
import {Parent} from "../../interfaces";

export const Grid: React.FC<Parent> = ({children}) => <Container>{children}</Container>;