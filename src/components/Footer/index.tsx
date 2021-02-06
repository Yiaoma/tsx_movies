import React from "react";
import {Container, List, Item, Link, Copyright} from "./style";

interface RestProps {
    [rest: string]: any;
}

interface LinkProps extends RestProps {
    href: string;
}

interface CompoundComponents {
    List: React.FC<RestProps>;
    Item: React.FC<RestProps>;
    Link: React.FC<LinkProps>;
    Copyright: React.FC<RestProps>;
}

export const Footer: React.FC<RestProps> & CompoundComponents = ({children, ...props}) => 
    <Container {...props}>{children}</Container>;

Footer.List = ({children, ...props}) => <List {...props}>{children}</List>;

Footer.Item = ({children, ...props}) => <Item {...props}>{children}</Item>;

Footer.Link = ({children, ...props}) => <Link {...props}>{children}</Link>;

Footer.Copyright = ({children, ...props}) => <Copyright {...props}>{children}</Copyright>;
