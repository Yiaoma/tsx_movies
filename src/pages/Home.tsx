import React from "react";
import {Header} from "../components";
import {Main} from "../components";
import {ListContainer} from "../containers/List";
import {FooterContainer} from "../containers/Footer";
import {NavContainer} from "../containers/Nav"; 

export const Home: React.FC = () => (
    <>
        <Header>
            <NavContainer/>
        </Header>
        <Main>
            <ListContainer/>
        </Main>
        <FooterContainer/>
    </>
);