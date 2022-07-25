import React, { Fragment } from 'react';

import TopHeader from '../header/headerComponents/topHeader'
import TopHeaderLinks from '../header/headerComponents/topHeaderLinks'
import HeaderContent from '../header/headerComponents/headerContent'

const Header = () => {
    return (
        <Fragment>
            <TopHeader />
            <TopHeaderLinks />
            <HeaderContent />
        </Fragment>
    )
}
export default Header;