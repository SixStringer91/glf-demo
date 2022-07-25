import React from 'react';
import './footerlinks.style.css';


const FooterLinkItem = (props) => {

    const { id, to, send, def } = props;


    const handleOnClick = (e) => {
        if (send) {
            window.location.href = send;
            e.preventDefault();
        }
    }

    return (
        <div className="">
            <li className="footLi">
                <a
                    href={to}
                    onClick={handleOnClick}
                    className='linkStyle'
                >
                    <p id={id} >{def}</p>
                </a>
            </li>
        </div>
    )
}

export default FooterLinkItem;