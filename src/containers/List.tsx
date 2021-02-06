import React from "react";
import {List} from "../components";

export const ListContainer: React.FC = () => (
    <List>
        <List.Title>This is title</List.Title>
        <List.Base>
            <List.Item>This is an item</List.Item>
        </List.Base>
    </List>
);