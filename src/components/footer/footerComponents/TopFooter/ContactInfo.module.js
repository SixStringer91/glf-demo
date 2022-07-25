import React, { Fragment } from 'react';


const ContactInfo = () => {
    return (
        <Fragment>
            <div className='block-title heading'>Contact Info</div>
            <div class="bullet">
                <div class="feature feature-icon-hover indent first"><span class="icon phoneIcon"></span>
                    <p class="no-margin">
                        Call Us 1.800.394.GOLF (4653)
                        <p class="no-margin"> M-F 6-4 PST - SAT-SUN 8-4</p></p>
                </div>
                <div class="feature feature-icon-hover indent"><span class="icon letterIcon"></span>
                    <p class="no-margin ">sales@golfdiscount.com</p>
                </div>
                <div class="feature feature-icon-hover indent"><span class="icon locationIcon"></span>
                    <p class="no-margin ">13405 SE 30th St, Suite 1A <p class="no-margin">Bellevue, WA 98005</p></p>
                </div>
            </div>
        </Fragment>
    )
}

export default ContactInfo;