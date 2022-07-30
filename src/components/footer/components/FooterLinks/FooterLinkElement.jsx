import React, { useState } from 'react';
import classes from './footerlinks.module.css';
import FooterLinkItem from './FooterLinkItem';

const MEDIA_WIDTH = 768

const FooterLinkElement = ({ id, def, inner }) => {
    const [isDisabled, setisDisabled] = useState(true)
    const content = inner.map(el => <FooterLinkItem key={el.id} {...el} />);

    const handleOnClick = () => window.innerWidth <= MEDIA_WIDTH && setisDisabled(prev => !prev);


    const blockContentClass = isDisabled
        ? classes.footerblockContent_disabled : classes.footerblockContent;

    return (
        <div onClick={handleOnClick} key={id} className={classes.footerLinksElement} >
            <div className={classes.footerblockTitle}>
                <p id={id} >
                    {def}
                </p>
            </div>
            <div className={blockContentClass}>
                <div className={classes.blockContFooter}>
                    <ul className={classes.bullet}>
                        {content}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterLinkElement;