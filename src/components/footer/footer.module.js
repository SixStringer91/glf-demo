import React, { Fragment } from 'react';
import FooterLinksPanel from './footerComponents/FooterLinks/FooterLinkPanel';
import TopFooter from './footerComponents/TopFooter/FooterTop.module';



const Footer = () => {
    return (
        <Fragment>
            <TopFooter />
            <FooterLinksPanel />
        </Fragment>
    )
}
export default Footer;