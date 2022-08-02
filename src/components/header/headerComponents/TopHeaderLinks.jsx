import React from 'react';
import { Link } from 'react-router-dom';
import { MAINLINK } from '../../../constants';
import classes from './TopHeaderLinks.module.css';

const TopHeaderLinks = () => {
    return <div className={classes.headerLinkWrapper}>
        <div className={classes.headerLinks}>
            <a href="tel:+18003944653">
                <span className={classes.LinksPhoneIcon} />
                Call 1.800.394.GOLF (4653)
            </a>
            |
            <Link to={`${MAINLINK}/blog`}>Golf Blog</Link>
            |
            <Link to={`${MAINLINK}/golf-clubs/pre-owned`}>
                Pre-Owned Golf Clubs
            </Link>
        </div>
        <div className={classes.helpDesk}>
            <div className={classes.rightLinks}>
                <Link to={`${MAINLINK}/return/`}>
                    <strong>
                        Shop With Confidence:</strong> Hassle Free Returns!
                </Link>
                <a href={`${MAINLINK}/help_desk/`}><strong>Have A Question?</strong> Visit Our
                    Help Desk</a></div>
        </div>
    </div>
}
export default TopHeaderLinks;