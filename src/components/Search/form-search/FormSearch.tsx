import {ChangeEvent, useState} from "react";
import {useSetDebounceTitle} from "./hook/useSetDebbounceTitle";
import s from './../Search.module.scss'
import {useSearchParams} from "react-router-dom";

export const FormSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') || '';
    const [currentMovie, setCurrentMovie] = useState(title);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMovie(e.currentTarget.value)
    };

    useSetDebounceTitle(currentMovie);

    return (
        <input className={s.search} type="text" value={currentMovie} onChange={onChangeHandler}/>
    )
}