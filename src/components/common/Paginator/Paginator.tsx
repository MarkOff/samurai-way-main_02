import React, {FC, useState} from 'react';
import s from './Paginator.module.css';


type PaginatorType = {
    currentPage: number
    totalItemsCount: number
    pageSize: number
    forPageSwitch: (currentPage: number, pageSize: number) => void
    portionSize?: number
}

export const Paginator: FC<PaginatorType> = (
    {
        currentPage,
        totalItemsCount,
        pageSize,
        forPageSwitch,
        portionSize = 10}) => {

    const [portionNumber, setPortionNumber] = useState<number>(Math.ceil(currentPage / portionSize))



    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    const onPrevButtonClickHandler = () => setPortionNumber(portionNumber - 1)
    const onNextButtonClickHandler = () => setPortionNumber(portionNumber + 1)

    return (
        <div className={s.pageBar}>


            <button disabled={portionNumber === 1}
                    className={s.selectButton} onClick={onPrevButtonClickHandler}>
                PREV
            </button>

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button disabled={currentPage === p} key={p}
                                   className={currentPage === p ? s.selectedPage : s.spanForPage}
                                   onClick={() => forPageSwitch(p, pageSize)}>{p}</button>
                })
            }

            <button disabled={portionCount === portionNumber}
                    className={s.selectButton} onClick={onNextButtonClickHandler}>
                NEXT
            </button>

        </div>

    )
}
