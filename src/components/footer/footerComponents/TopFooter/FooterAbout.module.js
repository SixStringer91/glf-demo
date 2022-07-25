import React, { Fragment } from 'react';
import './footerTop.style.css'


const FooterAbout = () => {
    return (
        <Fragment>
            <img src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/icons/gd_logo.jpg"></img>
            <p className='aboutTop'>
                GolfDiscount.com was founded in 1995 with the goal of becoming the premier destination for online Golf Clubs. Our unwavering focus on superior customer service has allowed us to expand our online offerings to include Golf Accessories, Clothing and so much more!
            </p>
            <p className='aboutBottom'>
                If you're looking for Golf Equipment online, compare us to other authorized online golf retailers. You'll find the absolute best prices, service and selection.
            </p>
            <a className='learnMore' href="https://www.golfdiscount.com/about_us/">Learn More</a>
        </Fragment >
    )
}
export default FooterAbout;