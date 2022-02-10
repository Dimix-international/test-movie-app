import {ReactNode, useMemo, useReducer} from "react";
import {searchMovieReducer} from "../reducers/search-movie-reducer";
import {SearchMoviesContext} from "../context/search-movie-context";


export const SearchMovieProvider = ({children}: { children: ReactNode }) => {
    const [searchState, searchDispatch] = useReducer(searchMovieReducer, {
        title: '',
        page: 1,
    });

    const value = useMemo(() => ({
        searchState,
        searchDispatch
    }),[searchState])

    return <SearchMoviesContext.Provider value={value}>
        {children}
    </SearchMoviesContext.Provider>
}