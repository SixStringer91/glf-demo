import React, { Fragment } from 'react';
import ContactInfo from './ContactInfo.module';
import FooterSubscribe from './ContactSubscribe.module';

const FooterContact = () => {
    return (
        <Fragment>
            <FooterSubscribe />
            <ContactInfo />
        </Fragment>
    )
}

export default FooterContact;