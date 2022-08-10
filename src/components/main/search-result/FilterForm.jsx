import { useCallback } from 'react';
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

    }, [navigate, query])

    const formElements = facets && facets
        .filter((_, i) => i)
        .map(el => {
            return <div key={`facets-${el.field}`} className={classes.formElement}>
                <div className={classes.header}>
                    <span>{el.label}</span>
                </div>
                <div className={classes.input}>
                    <input
                        placeholder={"Search for other ..."}
                        type="text"
                    />
                </div>

                <ul className={classes.checkboxes}>
                    {el.values.map((checkbox, i) => {
                        return (
                            <li key={`cbox-${checkbox.value}-${i}`}>
                                <label>
                                    <input
                                        checked={checkbox.active}
                                        onChange={() => goTo(el, checkbox)}
                                        type="checkbox"
                                        value={checkbox.value}
                                    />
                                    {checkbox.value}{`(${checkbox.count})`}
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        })

    return <div className={classes.filterBlock}>
        <div>
            {formElements}
        </div>
    </div>
}

export default FilterForm;