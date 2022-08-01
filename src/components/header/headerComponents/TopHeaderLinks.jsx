import React from 'react';
import classes from './TopHeaderLinks.module.css';

const TopHeaderLinks = () => {
    return <div className={classes.headerLinkWrapper}>
        <div className={classes.headerLinks}>
            <a href="tel:+18003944653">
                <span className={classes.LinksPhoneIcon} />
                Call 1.800.394.GOLF (4653)
            </a>
            |
            <a href="https://www.golfdiscount.com/blog">Golf Blog</a>
            |
            <a href="https://www.golfdiscount.com//golf-clubs/pre-owned">
                Pre-Owned Golf Clubs
            </a>
        </div>
        <div className={classes.helpDesk}>
            <div className={classes.rightLinks}><a href="https://www.golfdiscount.com/return/">
                <strong>
                    Shop With Confidence:</strong> Hassle Free Returns!</a>
                <a href="https://www.golfdiscount.com/help_desk/"><strong>Have A Question?</strong> Visit Our
                    Help Desk</a></div>
        </div>
    </div>
}
export default TopHeaderLinks;