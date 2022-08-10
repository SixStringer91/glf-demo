import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_LINK } from "../../../constants";
import { ProductItem, Recommendations } from "../../../ui-kit";
import FilterForm from "./FilterForm";
import classes from './searchResult.module.css';


const fetchSearch = (query) => `${
    API_LINK
}/api/search/search.json${query}&resultsFormat=native&siteId=ecz4i9`;

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

    const form = useMemo(
        () => data &&
            <FilterForm
                navigate={navigate}
                query={search}
                facets={data.facets} 
            />, [data, navigate, search]
    );

    return (
        <div>
            <h1>Search results</h1>
            <div className={classes.searchResult}>
                {form}
                <div className={classes.foundItems}>
                    {searchItems}
                </div>
            </div>
            <Recommendations />
        </div>
    )
}

export default SearchResult;