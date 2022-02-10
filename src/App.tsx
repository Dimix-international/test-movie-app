import React from 'react';
import './App.scss';
import {Search} from "./components/Search/Search";
import {Movies} from "./components/Movies/Movies";
import {useRequestForMovie} from "./hooks/useRequestForMovie";
import {SuccessResponseType} from "./types/types";
import {SearchTitle} from "./components/SeartchTitle/SearchTitle";
import {LoaderComponent} from "./components/Loader/Loader";
import {Pagination} from "./components/Pagination/Pagination";


function App() {
    const {data, isFetching} = useRequestForMovie();

    return (
        <div className="App">
            <Search/>
            <LoaderComponent/>
            {
                !isFetching && <SearchTitle
                    filmsCount={(data as SuccessResponseType).totalResults || '0'}
                />
            }
            {
                data && (data as SuccessResponseType).Response === 'True'
                && <Movies films={(data as SuccessResponseType).Search}/>
            }
            <Pagination totalItemCount={(data as SuccessResponseType).totalResults} />
        </div>
    );
}

export default App;
