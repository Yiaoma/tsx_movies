import React from "react";
import {List} from "../components";
import {Card} from "../components";
import {POSTER} from "../constants/urls";
import {useData} from "../hooks/useData";

// TODO: Moves this interface
interface Types {
    title: string;
    path: string;
}

export const ListContainer: React.FC<Types> = ({title, path}) => {
    const {data, isLoading} = useData(path);

    return (
        <List>
            <List.Title>{title}</List.Title>
            <List.Base>
                {/* TODO: FIX THIS!!*/}
                {!isLoading && data.map(movie => (
                    <List.Item key={movie.id}>
                        <Card>
                            <Card.Image src={`${POSTER}${movie.poster_path}`}/>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>{movie.release_date}</Card.Text>
                        </Card>
                    </List.Item>
                ))}
                {isLoading && <h1>Hello</h1>}
            </List.Base>
        </List>
    );
}