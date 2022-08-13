import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classes from './searchResult.module.css';

function Pagination({
    query,
    begin,
    currentPage,
    defaultPerPage,
    end,
    nextPage,
    perPage,
    previousPage,
    totalPages,
    totalResults
}) {

    const numbers = useMemo(() => {
        let startPoint, endPoint;
        const numArr = [...new Array(totalPages)].map((_, i) => i+1);
        const minorZero = currentPage - 5 <= 0;
        const majorTotal = currentPage + 5 >= totalPages;
        const minPage = currentPage - 3;
        const maxPage = currentPage + 2;
    
        switch (true) {
            case minorZero && majorTotal:
            default:
                startPoint = Math.sign(minPage) ? 0 : minPage;
                endPoint = maxPage > totalPages ? totalPages : maxPage;
                break;
            case minorZero:
                startPoint = 0;
                endPoint = startPoint + 5;
                break;
            case majorTotal:
                endPoint = totalPages;
                startPoint = endPoint - 5;
                break;
        }

        return numArr
        .slice(startPoint, endPoint)
        .map((num) => {
            const url = new URLSearchParams(query);
            url.set('page', num);
            const currentClass = num === currentPage
                ? classes.paginationItemSelected
                : classes.paginationItem;
            const linkUrl = `/search?${url.toString()}`;
            return (
                <Link
                    key={linkUrl}
                    className={currentClass}
                    to={linkUrl}
                >
                    {num}
                </Link>
            )
        })
    }, [currentPage, query, totalPages]);

    const prevPageComponent = useMemo(() => {
        if (!previousPage) return null;
        const url = new URLSearchParams(query);
        url.set('page', previousPage);
        return <Link
            className={classes.paginationItem}
            to={`/search?${url.toString()}`}>
            Previous page
        </Link>
    },[previousPage, query]);

    const nextPageComponent = useMemo(() => {
        if (!nextPage) return null;
        const url = new URLSearchParams(query);
        url.set('page', nextPage);
        return <Link
            className={classes.paginationItem}
            to={`/search?${url.toString()}`}>
            Next page
        </Link>
    }, [nextPage, query])

    return (
        <div className={classes.pagination}>
            {prevPageComponent}
            {numbers}
            {nextPageComponent}
        </div>
    )
}

export default Pagination;