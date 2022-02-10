import {
    SearchMoviesActionsType,
    SearchMoviesOperationType
} from "../context/search-movie-context";
import {SearchMoviesType} from "../types/types";

type SearchMovieReducerReturnType = {
    [key in `${SearchMoviesOperationType}`]: () => SearchMoviesType
}

export const searchMovieReducer = (state:SearchMoviesType,
    action:SearchMoviesActionsType):SearchMoviesType => {

    const setSearchParams = ():SearchMoviesType => {
        return {...state, ...action.payload}
    }

    const actionsSearchMovie = {
        'set-search-params': setSearchParams,
        'default':() => state
    } as SearchMovieReducerReturnType

    return (actionsSearchMovie[action.type] || actionsSearchMovie['default'])()
}