import React, {FC, useState} from 'react';
import s from './Paginator.module.css';


type PaginatorType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number
    forPageSwitch: (currentPage: number, pageSize: number) => void
}

export const Paginator: FC<PaginatorType> = (props) => {
    const {
        currentPage,
        totalItemsCount,
        pageSize,
        forPageSwitch,
        portionSize = 10
    } = props


    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize))
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    const onPrevButtonClickHandler = () =>  setPortionNumber(portionNumber - 1)
    const onNextButtonClickHandler = () =>  setPortionNumber(portionNumber + 1)

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
