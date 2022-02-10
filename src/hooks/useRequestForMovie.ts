import {ErrorType, SuccessResponseType} from "../types/types";
import {axiosInstance, key} from "../axiosInstance/axiosInstance";
import {useQuery} from "react-query";
import {useSearchMovie} from "./useSearchMovie";

const getMovies = async (title: string, page: number): Promise<SuccessResponseType | ErrorType> => {
    const response = await axiosInstance.get(`${key}&s=${title}&page=${page}`);
    return response.data
}


export const useRequestForMovie = () => {
    const {searchState} = useSearchMovie();

    const {data = {}} = useQuery(
        ['movies', `${searchState.title}-${searchState.page}`],
        () => getMovies(searchState.title, searchState.page),
        {
            enabled: !!searchState.title,
        }
    )

    return {
        data,
    }
}