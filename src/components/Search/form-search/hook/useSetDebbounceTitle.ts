import {useEffect} from "react";
import {useDebounce} from "../../../../hooks/useDebounce";
import {useSearchMovie} from "../../../../hooks/useSearchMovie";

export const useSetDebounceTitle = (currentMovie:string) => {

    const {searchDispatch} = useSearchMovie()
    const availableSearch = useDebounce({value:currentMovie, delay:500});

    useEffect(() => {
        searchDispatch({type:'set-search-params', payload: {title:availableSearch, page:1}})
    },[availableSearch, searchDispatch])

}