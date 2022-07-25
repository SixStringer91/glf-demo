import React from 'react';
import './topHeaderLinks.style.css';

const TopHeaderLinks = () => {
    return (
        <div className='headerLinks'>
            <a href="tel:+18003944653">
                <span className='LinksPhoneIcon' />
                Call 1.800.394.GOLF (4653)
            </a>
            |
            <a href="https://www.golfdiscount.com/blog">Golf Blog</a>
            |
            <a href="https://www.golfdiscount.com//golf-clubs/pre-owned">
                Pre-Owned Golf Clubs
            </a>
        </div>
    )
}
export default TopHeaderLinks;