import {SearchMoviesType} from "../types/types";
import {createContext} from "react";

export enum SearchMoviesOperationType {
    SetSearchParams = 'set-search-params',
    Default = 'default'
}

export type SearchMoviesActionsType = {
    type: `${SearchMoviesOperationType}`,
    payload: SearchMoviesType
}

export type SearchMoviesDispatchType = (action: SearchMoviesActionsType) => void;
export type SearchMoviesContextType = {
    searchState: SearchMoviesType,
    searchDispatch: SearchMoviesDispatchType
};

export const SearchMoviesContext = createContext<SearchMoviesContextType | undefined>(undefined);