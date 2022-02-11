import React from "react";
import s from './SearchTitle.module.scss'
import {useSearchParams} from "react-router-dom";

type SearchTitleType = {
    filmsCount: string
}
export const SearchTitle: React.FC<SearchTitleType> = React.memo(props => {
    const {filmsCount} = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') || '';

    return (
        <>
            {title && <h2 className={s.title}>You searched
                for: {title}, {filmsCount} results found</h2>
            }
        </>
    )
})