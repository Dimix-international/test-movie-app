import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {QueryClientProvider} from "react-query";
import {queryClient} from "./hooks/react-query/query-client";
import {ReactQueryDevtools} from 'react-query/devtools'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                    <App/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

