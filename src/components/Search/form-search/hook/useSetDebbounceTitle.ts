import {useEffect} from "react";
import {useDebounce} from "../../../../hooks/useDebounce";
import {useSearchParams} from "react-router-dom";

export const useSetDebounceTitle = (currentMovie: string) => {

    const availableSearch = useDebounce({value: currentMovie, delay: 500});
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') || '';
    const page = searchParams.get('page') || '1';

    useEffect(() => {
        setSearchParams({
            ...Object.entries(searchParams),
            title: availableSearch,
            page: availableSearch === title? page : '1'
        });
    }, [availableSearch, searchParams, setSearchParams,page,title])

}