import React from "react";
import {Hero} from "../components";

interface Types {
    title: string;
    background: string;
}

export const HeroContainer: React.FC<Types> = ({background, title}) => (
    <Hero src={background}>
        <Hero.Title>{title}</Hero.Title>
    </Hero>
);