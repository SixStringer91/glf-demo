import React from 'react';
import classes from './footerTop.module.css';
import img from '../../../../assets/pics/gd_logo.jpg';


const FooterAbout = () => {
    return (
        <>
            <img src={img} alt={'gd_logo'}></img>
            <p className={classes.aboutTop}>
                GolfDiscount.com was founded in 1995 with the goal of becoming the premier destination for online Golf Clubs. Our unwavering focus on superior customer service has allowed us to expand our online offerings to include Golf Accessories, Clothing and so much more!
            </p>
            <p className={classes.aboutBottom}>
                If you're looking for Golf Equipment online, compare us to other authorized online golf retailers. You'll find the absolute best prices, service and selection.
            </p>
            <a className={classes.learnMore} href="https://www.golfdiscount.com/about_us/">Learn More</a>
        </>
    )
}
export default FooterAbout;