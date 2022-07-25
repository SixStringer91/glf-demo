import React, { Fragment } from 'react';
import './footerTop.style.css'



const SocialLinks = () => {
    return (
        <Fragment>
            <div className='socialContainer'>
                <a className='firstLinks' title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className='iconTwitter'></span>
                </a>
                <a className='firstLinks' title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className='iconFacebook'></span>
                </a>
                <a className='firstLinks' title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className='iconYoutube'></span>
                </a>
                <a className='firstLinks' title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className='iconPinterest'></span>
                </a>
                <a className='firstLinks' title="Follow Golf Discount on Twitter" href="https://twitter.com/golfdiscount" >
                    <span className='iconInstagarmm'></span>
                </a>
            </div>
        </Fragment>
    )
}

export default SocialLinks;