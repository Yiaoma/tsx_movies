import React, {ReactNode} from "react";
import {Container, List, Item, Link, Copyright} from "./style";

interface Props {
    children: ReactNode;
}

interface LinkProps {
    target: string;
    href: string;
}

export const Footer = ({children}: Props) => <Container>{children}</Container>;

Footer.List = ({children}: Props) => <List>{children}</List>;

Footer.Item = ({children}: Props) => <Item>{children}</Item>;

Footer.Link = (props: Props & LinkProps) => <Link {...props}>{props.children}</Link>;

Footer.Copyright = ({children}: Props) => <Copyright>{children}</Copyright>;
