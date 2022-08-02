import React from 'react';
import FooterLinksPanel from './components/FooterLinks/FooterLinkPanel';
import TopFooter from './components/TopFooter/FooterTop';
import classes from './footer.module.css';


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <TopFooter />
                <FooterLinksPanel />
            </div>
            <div className={classes.copyright}>
                <span>© 2022 GolfDiscount.com, a division of Pro Golf Discount, Inc. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
export default Footer;