
import React, { Fragment } from 'react';
import './footerTop.style.css'

const FooterSubscribe = () => {
    return (
        <Fragment>
            <div className='fieldSub'>
                <input id='subscribe'
                    className='controlsub'
                    type="text"
                    // value = "value"
                    placeholder="Enter your email address"></input>
                <div className='SubActions'>
                    {/* must be component */}
                    <button type="submit" title='subBtn' className='subBtn'>
                        <span> Subscribe</span>
                    </button>
                </div>
            </div>

        </Fragment>
    )
}

export default FooterSubscribe;