import React from 'react';
import './mainContentLink.style.css';


const MainContentLinkItem = (props) => {

    const { id, to, send, def } = props;


    const handleOnClick = (e) => {
        if (send) {
            window.location.href = send;
            e.preventDefault();
        }
    }

    return (
        <div className="">
            <li className="mainLinkLi">
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

export default MainContentLinkItem;