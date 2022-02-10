import {useContext} from "react";
import {SearchMoviesContext} from "../context/search-movie-context";


export const useSearchMovie = () => {
    const context = useContext(SearchMoviesContext);
    if (!context) throw new Error('useSearchMovie must be used inside provider SearchMovie');
    return context;
}