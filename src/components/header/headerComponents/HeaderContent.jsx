import classes from './headerContent.module.css';
import MegaMenu from '../MegaMenu';
import img from '../../../assets/pics/gd_logo.jpg';

const HeaderContent = () => {
    return (
        <div className={classes.contentHeaderStyle}>
            <div className={classes.topContent}>
                <a className={classes.logo} href="https://www.golfdiscount.com/" >
                    <img src={img} alt='gd_logo' />
                </a>
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
                        <a className={classes.minicartIcon}></a>
                    </div>
                </div>

            </div>


            <div className={classes.contentLinksPanel}>
                <ul className={classes.contentLinks}>
                    <li>
                        <a className={classes.linksCont} href="https://www.golfdiscount.com/gdgiftcard/"> Gift Cards</a>
                    </li>
                    <li>
                        <a className={classes.linksCont} href="https://www.golfdiscount.com/customer/account/login/"> Log In</a>
                    </li>
                </ul>
            </div>
         <MegaMenu />
        </div>
    )
}
export default HeaderContent;