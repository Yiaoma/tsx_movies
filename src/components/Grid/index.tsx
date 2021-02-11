import React, { ReactNode } from "react";
import {Container} from "./style";

// TODO: Move this interface
interface Grid {
    children: ReactNode;
}

export const Grid: React.FC<Grid> = ({children}) => <Container>{children}</Container>;