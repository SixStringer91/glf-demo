import React, { Fragment } from 'react';
import './footerTop.style.css'
import FooterAbout from './FooterAbout.module';
import FooterWhy from './FooterWhy.module';
import FooterContact from './FooterContact.module';

const TopFooter = () => {
    return (

        <div class="container">
            <div class="FooterAbout">
                <FooterAbout />
            </div>
            <div class="FooterWhy">
                <FooterWhy />
            </div>
            <div class="FooterContact">
                <FooterContact />
            </div>
        </div>
    )
}
export default TopFooter;