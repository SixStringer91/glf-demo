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

    const numbers = [...new Array(totalPages)]
        .map((_, i) => {
            const url = new URLSearchParams(query);
            const num = i + 1;
            url.set('page', num);
            const currentClass = num === currentPage
                ? classes.paginationItemSelected
                : classes.paginationItem;
            const linkUrl = `/search?${url.toString()}`;
            return (
                <Link
                    key={linkUrl}
                    className={currentClass}
                    to={linkUrl}>
                    {num}
                </Link>
            )
        }
        );

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