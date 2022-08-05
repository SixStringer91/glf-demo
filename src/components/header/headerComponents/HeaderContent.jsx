import React, { useState } from 'react';
import classes from './headerContent.module.css';
import MegaMenu from '../MegaMenu';
import img from '../../../assets/pics/gd_logo.jpg';
import { MAINLINK } from '../../../constants';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import magnifier from '../../../assets/pics/magnifier.svg';

const HeaderContent = ({ isOffset, toggle }) => {
    const [searchToggle, setSearchToggle] = useState(false);

    const toggleClassname = isOffset
        ? classes.navToggleOpen : classes.navToggle;


    const handleSearchToggle = () => setSearchToggle(prev => !prev);

    return (
        <div className={classes.contentHeaderStyle}>
            <div className={classes.topContent}>
                <span
                    onClick={toggle}
                    className={[classes.action, toggleClassname].join(' ')}>
                    <span>Toggle Nav</span>
                </span>

                <Link className={classes.logo} to={`${MAINLINK}`}>
                    <img src={img} alt='gd_logo' />
                </Link>
                {/*to do minicart useState and must me separated component */}
                <SearchBar searchToggle={searchToggle} />
                <div className={classes.contentOrder}>
                    <button className={classes.searchAdaptiveToggle}
                        type='button'
                        onClick={handleSearchToggle}
                    >
                        <img src={magnifier} alt={'magnifier'} />
                    </button>
                    <div className={classes.trackOrder}>
                        <a className={classes.trackOrderBtn}
                            href="https://www.golfdiscount.com/track-your-order/">
                            TRACK YOUR ORDER
                        </a>
                    </div>
                    <div className={classes.miniCart}>
                        <a className={classes.minicartIcon} />
                    </div>
                </div>

            </div>

            <MegaMenu isOffset={isOffset} toggle={toggle} />
        </div>
    )
}
export default React.memo(HeaderContent);