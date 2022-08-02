import classes from './headerContent.module.css';
import MegaMenu from '../MegaMenu';
import img from '../../../assets/pics/gd_logo.jpg';
import { MAINLINK } from '../../../constants';
import { Link } from 'react-router-dom';

const HeaderContent = ({ isOffset, toggle }) => {
    const toggleClassname = isOffset
        ? classes.navToggleOpen : classes.navToggle;

    return (
        <div className={classes.contentHeaderStyle}>
            <div className={classes.topContent}>
                <span
                    data-action="toggle-nav"
                    onClick={toggle}
                    className={[classes.action, toggleClassname].join(' ')}>
                    <span>Toggle Nav</span>
                </span>

                <Link className={classes.logo} to={`${MAINLINK}`}>
                    <img src={img} alt='gd_logo' />
                </Link>
                {/*to do minicart useState and must me separated component */}
                <div className={classes.searchBar}>
                    <div className={classes.searchContent}>
                        <form>
                            <div className={classes.fieldSearch}>

                                <input id='search'
                                    className={classes.controlSearch}
                                    type="text"
                                    // value = "value"
                                    placeholder="Search entire store here..."></input>

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



                <div className={classes.contentOrder}>
                    <div className={classes.trackOrder}>
                        <a className={classes.trackOrderBtn} href="https://www.golfdiscount.com/track-your-order/">TRACK YOUR ORDER</a>
                    </div>
                    <div className={classes.miniCart}>
                        <a className={classes.minicartIcon}>

                        </a>
                    </div>
                </div>

            </div>

            <MegaMenu isOffset={isOffset} toggle={toggle} />
        </div>
    )
}
export default HeaderContent;