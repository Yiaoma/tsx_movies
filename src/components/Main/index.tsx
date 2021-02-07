import React from "react";
import {Container} from "./style";
import {Children} from "../../interfaces";

export const Main: React.FC<Children> = ({children}) => <Container>{children}</Container>;