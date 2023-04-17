import React, {FC} from 'react';
import s from './Paginator.module.css';


type PaginatorType= {
    pageSize: number
    totalUserCount: number
    currentPage: number
    forPageSwitch: (currentPage: number, pageSize: number) => void
}

export const Paginator: FC<PaginatorType> = (props) => {
 const {currentPage, totalUserCount, pageSize, forPageSwitch} = props


    const pagesCount = Math.ceil(totalUserCount / pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let slicedPages;
    const curPage = currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2,);
    }

    return (
            <div className={s.pageBar}>
                {slicedPages.map((el, index) => {
                    return (
                        <button disabled={currentPage === el} key={index} onClick={() => forPageSwitch(el, pageSize)}
                              className={currentPage === el ?  s.selectedPage : s.spanForPage}>
                                {el}
                            </button>
                    )
                })}...
            </div>
    );
};

