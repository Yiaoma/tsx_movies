import React from "react";
import {Header} from "../components";
import {Main} from "../components";
import {HeroContainer} from "../containers/Hero";
import {FooterContainer} from "../containers/Footer";
import {NavContainer} from "../containers/Nav";
import {ListContainer} from "../containers/List";

export const Home: React.FC = () => (
    <>
        {/* TODO: No static strings */}
        <Header>
            <NavContainer/>
            <HeroContainer href="https://www.themoviedb.org/t/p/original/1IlxKk1NaFPeuCMQO9Bl0NUhhpw.jpg" title="Hello there"/>
        </Header>
        <Main>
            <ListContainer title="What's popular" path="/movie/popular"/>
            <ListContainer title="Trending" path="/movie/now_playing"/>
        </Main>
        <FooterContainer/>
    </>
);