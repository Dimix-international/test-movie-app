import {MovieInfoType} from "../../types/types";
import React from "react";
import s from './Movies.module.scss'
import {Card} from "./Card/Card";

type MoviesType = {
    films: Array<MovieInfoType>
}

export const Movies:React.FC<MoviesType> = React.memo(props => {
    const {films} = props;

    return(
        <div className={s.container}>
            {
                films.map(film => (
                    <Card key={film.imdbID} data={film} />

                ))
            }
        </div>
    )
})

