import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FormItem from './FormItem';
import classes from './searchResult.module.css';

function FilterForm({ query, facets, navigate }) {

    const goTo = useCallback((label, item) => {
        const key = `filter.${label.field}`;
        const url = new URLSearchParams(query);

        const activeParams = url.getAll(key)
            .filter(el => label.values
                .find(value => value.active && value.value === el));
        url.delete(key);

        if (item.active) {
            const ind = activeParams.findIndex(el => el === item.value);
            if (~ind) activeParams.splice(ind, 1);
        } else activeParams.push(item.value);

        activeParams.forEach(el => url.append(key, el));
        navigate(`/search?${url.toString()}`)

    }, [navigate, query]);

    const formElements = facets && facets
        .filter((el) => el.field !== 'final_price')
        .map(el => (
            <FormItem
                key={`facets-${el.field}`}
                data={el}
                goTo={goTo}
            />))

    const clearAllLink = useMemo(() => {
        const url = new URLSearchParams(query);
        const keys = Array.from(url.keys())
            .filter(el => !el.match(/(q|resultsPerPage|page|sort(.*))$/));
        keys.forEach(el => url.delete(el));

        return (
            <Link
                className={classes.clearAll}
                to={`/search?${url.toString()}`}
            >
                Clear all
            </Link>
        )
    }, [query]);

    return <div className={classes.filterBlock}>
        {clearAllLink}
        <div>
            {formElements}
        </div>
    </div>
}

export default FilterForm;