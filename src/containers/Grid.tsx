import React from "react";
import {Grid, Card} from "../components";
import {useData} from "../hooks";
import {POSTER} from "../constants/urls";
import {useParams} from "react-router-dom";

// TODO: Move this interface.
interface Movie {
    id: string;
    poster_path: string;
    title: string;
    release_date: string;
    original_name: string;
    first_air_date: string;
}

export const GridContainer = () => {
    const {type, category}: {type: string, category: string} = useParams();
    const {data, isLoading} = useData(`/${type}/${category}`);

    return (
        <Grid>
            {!isLoading && data.map((movie: Movie) => (
                <Card key={movie.id}>
                    <Card.Image src={`${POSTER}${movie.poster_path}`}/>
                    <Card.Title>{movie.original_name || movie.title}</Card.Title>
                    <Card.Text>{movie.release_date || movie.first_air_date}</Card.Text>
                </Card>
            ))}
        </Grid>
    );
}