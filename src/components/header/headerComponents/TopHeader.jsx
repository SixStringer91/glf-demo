import React from 'react';
import classes from './TopHeader.module.css';
import img from '../../../assets/pics/icon-truck.png'

const TopHeader = () => {
    return (
        <div className={classes.topHeaderStyle}>
            <div className={classes.linksOnTop}>
                {/* <a> must be <Link>*/}
                <a href="https://www.golfdiscount.com/shipping" title="Free Shipping on Orders Over $99">
                    <img src={img} alt='golf-truck'/>
                    <span>Free Shipping on all Orders Over $99!
                        <span>*some exceptions apply.</span>
                    </span>
                </a>
            </div>
        </div>
    )
}
export default TopHeader;