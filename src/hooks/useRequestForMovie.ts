import {ErrorType, SuccessResponseType} from "../types/types";
import {axiosInstance, key} from "../axiosInstance/axiosInstance";
import {useQuery} from "react-query";
import {useSearchParams} from "react-router-dom";

const getMovies = async (title: string, page: number): Promise<SuccessResponseType | ErrorType> => {
    const response = await axiosInstance.get(`?i=tt3896198&apikey=8523cbb8&s=${title}&page=${page}`);
    return response.data
}

export const useRequestForMovie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') || '';
    const page = searchParams.get('page') || '1';

    const {data = {}, isFetching} = useQuery(
        ['movies', `${title}-${page}`],
        () => getMovies(title, Number(page)),
        {
            enabled: !!title,
        }
    )

    return {
        data,
        isFetching,
    }
}