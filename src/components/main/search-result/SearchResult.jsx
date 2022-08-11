import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_LINK } from "../../../constants";
import { ProductItem } from "../../../ui-kit";
import FilterForm from "./FilterForm";
import Pagination from "./Pagination";
import classes from './searchResult.module.css';


const fetchSearch = (query) => `${API_LINK
    }/api/search/search.json${query}&resultsPerPage=12&resultsFormat=native&siteId=ecz4i9`;

function SearchResult() {
    const [data, setData] = useState(null);
    const { search } = useLocation();
    const navigate = useNavigate();



    const getSearchData = useCallback(async () => {
        const resp = await fetch(fetchSearch(search));
        const result = await resp.json();
        setData(result);
    }, [search]);

    useEffect(() => { getSearchData() }, [getSearchData])

    const searchItems = useMemo(() => {
        if (!data) return data;
        return data.results.map((el) => <div key={`search-item-${el.entity_id}`}>
            <ProductItem classNames={{ root: classes.itemRoot }} {...el} />
        </div>)
    }, [data]);

    const searchItemsLength = useMemo(() => data && (
        <strong className={classes.pullLeft}>
            {data.results.length} result found
        </strong>
    ), [data]);

    const searchOptions = useMemo(() => data && (
        <div className={classes.pullRight}>
            <span className={classes.pullRightTitle}>
                SORT BY &nbsp;
            </span>
            <div className={classes.pullRightSelect}>
                <select>
                    {data.sorting.options.map((el, i) => (
                        <option key={`option-${el.field}-${i}`}>
                            {el.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    ), [data])

    const form = useMemo(
        () => data &&
            <FilterForm
                navigate={navigate}
                query={search}
                facets={data.facets}
            />, [data, navigate, search]
    );

    const pagination = data && <Pagination query={search} {...data.pagination} />

    return (
        <div>
            <h1>Search results</h1>
            <div className={classes.searchResult}>
                {form}
                <div className={classes.foundItems}>
                    <div className={classes.searchSpring}>
                        {searchItemsLength}
                        {searchOptions}
                    </div>
                    <div className={classes.foundItemGrid}>
                        {searchItems}
                    </div>
                    {pagination}
                </div>
            </div>
        </div>
    )
}

export default SearchResult;