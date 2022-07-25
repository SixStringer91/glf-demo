import React, { Fragment } from 'react';




const WhyGolf = () => {
    return (
        <Fragment>
            <div className='block-title heading'>Why Golf Discount?</div>
            <div class="bullet">
                <div class="feature feature-icon-hover indent first"><span class="icon i-char">1</span>
                    <p class="no-margin">
                        <strong>Guaranteed Lowest Price</strong>
                        <p class="no-margin"> We match all authorized retailers</p></p>
                </div>
                <div class="feature feature-icon-hover indent"><span class="icon i-char">2</span>
                    <p class="no-margin "><strong>FREE Shipping on orders over $99</strong> <p class="no-margin">*Some exclusions apply</p></p>
                </div>
                <div class="feature feature-icon-hover indent"><span class="icon i-char">3</span>
                    <p class="no-margin "><strong>Excellent Customer Service</strong> <p class="no-margin">5 Star Google Rating</p></p>
                </div>
            </div>
        </Fragment>
    )
}

export default WhyGolf;