import React from 'react';
import './App.scss';
import {Search} from "./components/Search/Search";
import {useIsFetching} from "react-query";
import {Movies} from "./components/Movies/Movies";
import {useRequestForMovie} from "./hooks/useRequestForMovie";
import {ErrorType, SuccessResponseType} from "./types/types";

function App() {
    const isFetching = useIsFetching();
    const display = (isFetching) ? 'flex' : 'none';
    const {data} = useRequestForMovie();


    return (
        <div className="App">
            <Search />
            <div style={{display:display}}>loading...</div>
            {
                data && (data as SuccessResponseType).Response === 'True'
                ? <Movies films={(data as SuccessResponseType).Search }/>
                    :<div>{(data as ErrorType).Error} </div>
            }
        </div>
    );
}

export default App;
