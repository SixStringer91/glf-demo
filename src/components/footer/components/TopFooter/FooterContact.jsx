import React from 'react';
import classes from './footerTop.module.css';
import img from '../../../../assets/pics/badge.png';

function FooterContact() {
    return (
        <>

            {/* subscribe */}

            <div className={[classes.fieldSub, classes.topPart].join(' ')}>
                <input id={classes.subscribe}
                    className={classes.controlsub}
                    type="text"
                    placeholder="Enter your email address"></input>
                <div className={classes.SubActions}>
                    {/* must be component */}
                    <button type="submit" title='subBtn' className={classes.subBtn}>
                        <span> Subscribe</span>
                    </button>
                </div>
            </div>

            {/* contract info */}

            <div className={classes.infoBlock}>
                <div>
                    <div className={classes.heading}>Contact Info</div>
                    <div className={classes.bullet}>
                        <div className={classes.feature}>
                            <span className={classes.phoneIcon}></span>
                            <p className={classes.noMargin}>
                                Call Us 1.800.394.GOLF (4653)
                                <p> M-F 6-4 PST - SAT-SUN 8-4</p>
                            </p>
                        </div>
                        <div className={classes.feature}>
                            <span className={classes.letter}></span>
                            <p className={classes.noMargin}>
                                sales@golfdiscount.com
                                <p className={classes.ghost}>
                                </p>
                            </p>
                        </div>
                        <div className={classes.feature}>
                            <span className={classes.location}></span>
                            <p className={classes.noMargin}>
                                13405 SE 30th St, Suite 1A
                                <p>
                                    Bellevue, WA 98005
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.yotpo}>
                    <div className={classes.yotpoWrapper}>
                        <img src={img} className={classes.badgeImage} alt="28.1K" tabIndex="0" />
                        <div className={classes.badgeRewievs}>28.1K</div>
                        <span className={classes.badgeStars}>
                            <span className={classes.yotpoIcon}></span>
                            <span className={classes.yotpoIcon}></span>
                            <span className={classes.yotpoIcon}></span>
                            <span className={classes.yotpoIcon}></span>
                            <span className={classes.yotpoIcon}></span>

                            {/* <span class="sr-only">4.7 star rating</span> */}
                        </span>
                        <div className={classes.badgeCertified}><span>Certified</span>reviews</div>
                        <div className={classes.poweredBy}><span>Powered</span><span>by</span>YOTPO</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterContact;