import { useCallback, useEffect, useMemo, useState } from "react";
import { Recommendations } from "../../../ui-kit";
import Item from "../../header/headerComponents/Item";
import classes from './searchResult.module.css';

const LINK = 'https://ecz4i9.a.searchspring.io/api/search/search.json?q=123&resultsPerPage=12&resultsFormat=native&siteId=ecz4i9'

function SearchResult() {
    const [data, setData] = useState(null);

    const getSearchData = useCallback(async () => {
        const resp = await fetch(LINK);
        const result = await resp.json();
        setData(result);
    }, []);

    useEffect(() => { getSearchData() }, [getSearchData])

    const searchItems = useMemo(() => {
        if (!data) return data;
        return data.results.map((el) => <div key={`search-item-${el.entity_id}`}>
            <Item {...el} />
        </div>)
    }, [data])

    return (
        <div className={classes.searchResult}>
            <h1>Search results</h1>
            <div className={classes.foundItems}>
                {searchItems}
            </div>
            <Recommendations />
        </div>
    )
}

export default SearchResult;