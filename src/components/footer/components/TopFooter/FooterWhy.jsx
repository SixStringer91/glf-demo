import React from 'react';
import classes from './footerTop.module.css'


const FooterWhy = () => {
    return (
        <>
        {/* social links */}
            <div className={classes.topPart}>
                <a className={classes.firstLinks} title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className={classes.iconTwitter}></span>
                </a>
                <a className={classes.firstLinks} title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className={classes.iconFacebook}></span>
                </a>
                <a className={classes.firstLinks} title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className={classes.iconYoutube}></span>
                </a>
                <a className={classes.firstLinks} title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className={classes.iconPinterest}></span>
                </a>
                <a className={classes.firstLinks} title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className={classes.iconInstagarmm}></span>
                </a>
            </div>


            {/* blocks */}

            <div className={classes.heading}>Why Golf Discount?</div>
            <div className={classes.bullet}>
                <div className={classes.feature}>
                    <span className={classes.icon}>1</span>
                    <div className={classes.noMargin}>
                        <strong>Guaranteed Lowest Price</strong>
                        <p> We match all authorized retailers</p></div>
                </div>
                <div className={classes.feature}>
                    <span className={classes.icon}>2</span>
                    <div className={classes.noMargin}>
                        <strong>FREE Shipping on orders over $99</strong>
                        <p>*Some exclusions apply</p>
                    </div>
                </div>
                <div className={classes.feature}>
                    <span className={classes.icon}>3</span>
                    <div className={classes.noMargin}>
                        <strong>Excellent Customer Service</strong>
                        <p>5 Star Google Rating</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterWhy;