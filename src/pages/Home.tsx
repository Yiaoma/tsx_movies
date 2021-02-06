import React from "react";
import {Header} from "../components";
import {Main} from "../components";
import {HeroContainer} from "../containers/Hero";
import {ListContainer} from "../containers/List";
import {FooterContainer} from "../containers/Footer";
import {NavContainer} from "../containers/Nav"; 

export const Home: React.FC = () => (
    <>
        <Header>
            <NavContainer/>
            <HeroContainer background="https://www.themoviedb.org/t/p/original/1IlxKk1NaFPeuCMQO9Bl0NUhhpw.jpg" title="Hello there"/>
        </Header>
        <Main>
        </Main>
        <FooterContainer/>
    </>
);