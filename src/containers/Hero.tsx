import React from "react";
import {Hero} from "../components";

interface Types {
    title: string;
    href: string;
}

export const HeroContainer: React.FC<Types> = ({href, title}) => (
    <Hero href={href}>
        <Hero.Title>{title}</Hero.Title>
    </Hero>
);