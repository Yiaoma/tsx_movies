import React from "react";
import {Header} from "../components";
import {Main} from "../components";
import {FooterContainer} from "../containers/Footer";
import {NavContainer} from "../containers/Nav";
import {GridContainer} from "../containers/Grid";

export const Browse: React.FC = () => {
    return (
        <>
            <Header>
                <NavContainer/>
            </Header>
            <Main>
                <GridContainer/>
            </Main>
            <FooterContainer/>
        </>
    );
}