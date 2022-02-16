import React, {useState} from "react";
import s from './Pagination.module.scss'
import {useWindowSize} from "../../hooks/useWindowSize";
import {useSearchParams} from "react-router-dom";

type PaginationType = {
    totalItemCount: string
}

export const Pagination: React.FC<PaginationType> = React.memo(props => {
    const {totalItemCount} = props;

    const [,width]= useWindowSize();

    const pages = [];
    const pageCount = Math.ceil(Number(totalItemCount) / 10); //сервер отдает по 10 элементов

    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title') || '';
    const page = searchParams.get('page') || '1';

    for (let i = 1; i < pageCount + 1; i++) {
        pages.push(i)
    }
    const portionSize = width < 576 ? 5 : 10; //количество цифр в пагинации

    const portionsCount = Math.ceil(pageCount / portionSize);

    const [portionNumber, setPortionNumber] = useState(Math.ceil(Number(page) / portionSize))
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const prevButtonHandler = () => {
        setPortionNumber(prevValue => prevValue - 1)
    }
    const nextButtonHandler = () => {
        setPortionNumber(prevValue => prevValue + 1)
    }
    const sendRequest = (page: number) => {
        setSearchParams({
            ...Object.entries(searchParams),
            title,
            page: String(page)
        });
    }

    console.log(leftPortionPageNumber, rightPortionPageNumber,pages)
    return (
        <div className={s.body}>
            <div className={s.row}>
                {
                    portionNumber > 1 &&
                    <button className={s.btn} onClick={prevButtonHandler}>&#8249;</button>
                }
                {
                    pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => (
                            <span className={`${s.elem } ${p === Number(page )? s.active : ''}`} key={p}
                                  onClick={() => sendRequest(p)}>{p}</span>
                        ))

                }
                {
                    portionsCount > portionNumber &&
                    <button className={s.btn} onClick={nextButtonHandler}>&#8250;</button>
                }
            </div>
        </div>
    )
})