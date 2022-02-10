import {useIsFetching} from "react-query";
import GridLoader from "react-spinners/GridLoader";
import React from "react";
import s from './Loader.module.scss'

export const LoaderComponent = () => {
    const isFetching = useIsFetching();
    const finalClass = (isFetching) ? s.loader : s.hide;

    return (
        <div className={finalClass}>
            <GridLoader size={20} speedMultiplier={1} color={'#5195f1'}/>
        </div>
    )
}