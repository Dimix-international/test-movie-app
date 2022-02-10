import {ChangeEvent, useState} from "react";
import {useSetDebounceTitle} from "./hook/useSetDebbounceTitle";
import s from './../Search.module.scss'

export const FormSearch = () => {
    const [currentMovie, setCurrentMovie] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentMovie(e.currentTarget.value)
    };

    useSetDebounceTitle(currentMovie);

    return (
        <input className={s.search} type="text" value={currentMovie} onChange={onChangeHandler}/>
    )
}