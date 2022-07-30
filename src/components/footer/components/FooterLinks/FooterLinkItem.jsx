import React from 'react';
import classes from './footerlinks.module.css';


const FooterLinkItem = (props) => {

    const { id, to, send, def } = props;


    const handleOnClick = (e) => {
        if (send) {
            window.location.href = send;
            e.preventDefault();
        }
    }

    return (
        <div>
            <li className={classes.footLi}>
                <a
                    href={to}
                    onClick={handleOnClick}
                    className={classes.linkStyle}
                >
                    <p id={id} >{def}</p>
                </a>
            </li>
        </div>
    )
}

export default FooterLinkItem;