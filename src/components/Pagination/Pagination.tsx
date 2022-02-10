import React, {useState} from "react";
import s from './Pagination.module.scss'
import {useSearchMovie} from "../../hooks/useSearchMovie";

type PaginationType = {
    totalItemCount: string
}

const getPortions= () => {
    const width =  document.documentElement.clientWidth;
    return width < 576 ? 5 : 10
}

export const Pagination: React.FC<PaginationType> = React.memo(props => {
    const {totalItemCount} = props;
    const {searchState, searchDispatch} = useSearchMovie()

    const pages = [];
    const pageCount = Math.ceil(Number(totalItemCount) / 10); //сервер отдает по 10 элементов

    for (let i = 1; i < pageCount; i++) {
        pages.push(i)
    }
    const portionSize = getPortions();

    const portionsCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const prevButtonHandler = () => {
        setPortionNumber(prevValue => prevValue - 1)
    }
    const nextButtonHandler = () => {
        setPortionNumber(prevValue => prevValue + 1)
    }
    const sendRequest = (page: number) => {
        searchDispatch({
            type: 'set-search-params', payload: {
                title: searchState.title,
                page
            }
        })
    }

    return (
        <div className={s.body}>
            <div className={s.row}>
                {
                    portionNumber > 1 &&
                    <button className={s.btnPrev} onClick={prevButtonHandler}>PREV</button>
                }
                {
                    pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => (
                            <span className={`${s.elem } ${p === searchState.page ? s.active : ''}`} key={p}
                                  onClick={() => sendRequest(p)}>{p}</span>
                        ))

                }
                {
                    portionsCount > portionNumber &&
                    <button className={s.btnNext} onClick={nextButtonHandler}>Next</button>
                }
            </div>
        </div>
    )
})