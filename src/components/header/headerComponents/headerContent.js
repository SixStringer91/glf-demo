import React from 'react';
import './headerContent.style.css';

const HeaderContent = () => {
    return (
        <div className='contentHeaderStyle'>
            <div className='topContent'>
                <a className='logo' href="https://www.golfdiscount.com/" >
                    <img src="https://www.golfdiscount.com/media/logo/stores/1/gd_logo_4.png"></img>
                </a>
                {/*to do minicart useState and must me separated component */}
                <div className='searchBar'>
                    <div className='searchContent'>
                        <form>
                            <div className='fieldSearch'>

                                <input id='search'
                                    className='controlSearch'
                                    type="text"
                                    // value = "value"
                                    placeholder="Search entire store here..."></input>

                                <div className='searchActions'>
                                    {/* must be component */}
                                    <button type="submit" title='searchBtn' className='searchBtn'>
                                        <span> Search</span>
                                    </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>



                <div className='contentOrder'>
                    <div className='trackOrder'>
                        <a className='trackOrderBtn' href="https://www.golfdiscount.com/track-your-order/">TRACK YOUR ORDER</a>
                    </div>
                    <div className='miniCart'>
                        <a className='minicartIcon'></a>
                    </div>
                </div>

            </div>


            <div className='contentLinksPanel'>
                <ul className='contentLinks'>
                    <li>
                        <a className='linksCont' href="https://www.golfdiscount.com/gdgiftcard/"> Gift Cards</a>
                    </li>
                    <li>
                        <a className='linksCont' href="https://www.golfdiscount.com/customer/account/login/"> Log In</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HeaderContent;