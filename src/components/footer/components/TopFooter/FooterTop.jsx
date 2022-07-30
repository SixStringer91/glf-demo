import React from 'react';
import classes from './footerTop.module.css'
import FooterAbout from './FooterAbout';
import FooterWhy from './FooterWhy';
import FooterContact from './FooterContact';

const TopFooter = () => {
    return (

        <div className={classes.upperContainer}>
            <div className={[classes.FooterAbout, classes.collapsible].join(' ')}>
                <FooterAbout />
            </div>
            <div className={[classes.FooterWhy , classes.collapsible].join(' ')}>
                <FooterWhy />
            </div>
            <div className={[classes.FooterContact, classes.collapsible].join(' ')}>
                <FooterContact />
            </div>
        </div>
    )
}
export default TopFooter;