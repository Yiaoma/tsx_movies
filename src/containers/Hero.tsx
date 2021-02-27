import React from "react";
import {Hero} from "../components";

interface Types {
    title: string;
    src: string;
}

export const HeroContainer: React.FC<Types> = ({src, title}) => (
    <Hero src={src}>
        <Hero.Title>{title}</Hero.Title>
    </Hero>
);