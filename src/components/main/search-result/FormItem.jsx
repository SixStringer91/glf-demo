import { useState } from 'react';
import { Excretion } from '../../../ui-kit/excretion';
import useSearch from './hooks/useSearch';
import classes from './searchResult.module.css';

function FormItem({ data, goTo }) {

    const { label, values } = data;

    const [searchText, setSearchText] = useState('');

    const foundElement = useSearch(searchText, values, ['value']);

    const handleChange = (e) => setSearchText(e.target.value);


    const elements = searchText.length ? foundElement : values;

    return (
        <div className={classes.formElement}>
            <div className={classes.header}>
                <span>{label}</span>
            </div>
            <div className={classes.input}>
                <input
                    placeholder={"Search for other ..."}
                    type="text"
                    value={searchText}
                    onChange={handleChange}
                />
            </div>

            <ul className={classes.checkboxes}>
                {elements.map((checkbox, i) => {
                    return (
                        <li key={`cbox-${checkbox.value}-${i}`}>
                            <label>
                                <input
                                    checked={checkbox.active}
                                    onChange={() => goTo(data, checkbox)}
                                    type="checkbox"
                                    value={checkbox.value}
                                />
                                <Excretion name={checkbox.value} inputText={searchText} />{`(${checkbox.count})`}
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FormItem;