import React from "react";
import {Container} from "./style";
import {Parent} from "../../interfaces";

export const Main: React.FC<Parent> = ({children}) => <Container>{children}</Container>;