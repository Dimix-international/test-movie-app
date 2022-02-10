import React from "react";
import {MovieInfoType} from "../../../types/types";
import s from './Card.module.scss'

type CardType = {
    data: MovieInfoType
}
export const Card: React.FC<CardType> = React.memo(props => {
    const {data} = props;

    return (
        <div className={s.card}>
            <div className={s.poster}>
                <img src={data.Poster} alt="poster"/>
            </div>
            <div className={s.info}>
                <h6 className={s.title}>Poster: {data.Title}</h6>
                <h6>Year: {data.Year}</h6>
                <h6>imdbID: {data.imdbID}</h6>
                <h6>Type: {data.Type}</h6>
            </div>
        </div>
    )
})