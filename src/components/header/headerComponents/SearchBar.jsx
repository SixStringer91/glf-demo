import { useMemo } from "react";
import { useHeaderContent } from './hooks/useHeaderContent';
import magnifier from '../../../assets/pics/magnifier.svg';
import loader from '../../../assets/pics/loader-1.gif';
import { limitString } from '../../../libs';
import err from '../../../assets/pics/err.png';
import classes from './headerContent.module.css';
import { Link } from 'react-router-dom';


function SearchBar({searchToggle}) {
    const { loading, matches, items, isBlockVisible, fetchData } = useHeaderContent();


    const matchesUi = useMemo(() => matches && matches.alternatives
        .map((el, i) => (
            <div className={classes.matchesItem} key={i}>
                <img src={magnifier} alt="magnifier" />
                <span>
                    <em>
                        {matches.query}
                    </em> in <Link to={`/catalogsearch/result?q=${el.text}`}>
                        {el.text}
                    </Link>
                </span>
            </div>
        )), [matches]);



    const itemsUi = useMemo(() => items?.results?.filter((_, i) => i < 8)
        .map((el, i) => (
            <div className={classes.matchItem} key={i}>
                <div className={classes.imageBlock}>
                    <img onError={(e) => {
                            e.target.src = err
                            e.target.style.background = 'none'
                        }} src={el.imageUrl} alt={el.name} />
                </div>
                <div className={classes.infoBlock}>
                    <div className={classes.title}>{limitString(String(el.name), 40)}</div>
                    <div className={classes.description}>{limitString(String(el.description), 40)}</div>
                    <div className={classes.stars} />
                    <div className={classes.price}>${el.price}</div>
                </div>
            </div>)), [items])


    const searchResult = useMemo(() => !loading && matchesUi, [loading, matchesUi]);


    const rightBlockInner = useMemo(() => {
        const inner = loading
            ? <div className={classes.loader}><img src={loader} alt='loader' /></div>
            : <div>
                <div className={classes.itemGrid}>
                    {
                        items?.results?.length
                            ? itemsUi
                            : <span className={classes.noProd}>No products for query {matches?.query}</span>
                    }
                </div>
                <div className={classes.allProductsBlock}>
                    See products in {' '}
                    <Link to={'#'}>
                        All departments ({items?.results?.length})
                    </Link></div>
            </div>
        return inner;
    }, [loading, items, itemsUi, matches]);

    const searchClass = searchToggle ? classes.searchBarActive : classes.searchBar

    return (
        <div className={searchClass}>
            <div className={classes.searchContent}>
                <form>
                    <div className={classes.fieldSearch}>
                        <input
                            autoComplete={'off'}
                            id='search'
                            onChange={fetchData}
                            className={classes.controlSearch}
                            type="text"
                            placeholder="Search entire store here..." />
                        {isBlockVisible && <div className={classes.inputBlock}>
                            <div className={classes.leftBlock}>
                                {searchResult}
                            </div>
                            <div className={classes.rightBlock}>
                                {rightBlockInner}
                            </div>
                        </div>
                        }
                        <div className={classes.searchActions}>
                            {/* must be component */}
                            <button type="submit" title='searchBtn' className={classes.searchBtn}>
                                <span> Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SearchBar;