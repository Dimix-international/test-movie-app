import React from "react";
import {useSearchMovie} from "../../hooks/useSearchMovie";
import s from './SearchTitle.module.scss'

type SearchTitleType = {
    filmsCount: string
}
export const SearchTitle: React.FC<SearchTitleType> = React.memo(props => {
    const {filmsCount} = props;
    const {searchState} = useSearchMovie()

    return (
        <>
            {searchState.title && <h2 className={s.title}>You searched
                for: {searchState.title}, {filmsCount} results found</h2>
            }
        </>
    )
})