import Slider from 'react-slick';
import homeLeftClosetsApparel from '../../../assets/pics/home-left-closeout-apparel.jpg';
import homeLeftPackageSets from '../../../assets/pics/home-left-package-sets.jpg';
import callAwayMavrik from '../../../assets/pics/home-flash-220518-callaway-mavrik.webp';
import ping from '../../../assets/pics/home-flash-220701-ping-g410.webp';
import cobra from '../../../assets/pics/home-flash-220613-cobra-mim-wedges.webp';
import redspeed from '../../../assets/pics/home-flash-220708-cobra-radspeed.webp';
import cleveland from '../../../assets/pics/home-flash-220322-cleveland-cbx2.jpg';
import tmSim from '../../../assets/pics/home-flash-220713-tm-sim.webp';
import classes from './cms-block.module.css';

const sliderData = [
    {
        img: callAwayMavrik,
        alt: "Shop Callaway Mavrik Woods and Irons at GolfDiscount.com"
    },
    {
        img: ping,
        alt: "Shop PING G410 Series at GolfDiscount.com"
    },
    {
        img: cobra,
        alt: "Cobra MIM Wedges at GolfDiscount.com"
    },
    {
        img: redspeed,
        alt: "Price Too Low to Show on Cobra Radspeed at GolfDiscount.com"
    },
    {
        img: cleveland,
        alt: "Cleveland CBX 2 Wedges at GolfDiscount.com"
    },
    {
        img: tmSim,
        alt: "Shop TaylorMade SIM Max and SIM2 Woods Irons at GolfDiscount.com" 
    }
]

function SliderBlock() {

    const settings = {
        infinite: true,
        speed: 500,
        fade: true,
        dots: true,
        dotsClass: "my-dots",
        cssEase: 'linear',
        arrows: false,
        // prevArrow: false,
        // nextArrow: false,
        autoplay: true,
        className: classes.slickSlider
    };




    return (
        <div className={classes.carouselBlock}>
            <div className="qualification">
                <div className="qualification__certificate">
                    <div className="qualification__certificate-descr">
                        <div>
                            <div>
                                <a href="https://www.golfdiscount.com/closeouts/apparel"
                                    title="Closeout Golf Apparel at Golf Discount">
                                    <img src={homeLeftClosetsApparel} alt={"closets-apparel"} />
                                </a>
                                <a href="https://www.golfdiscount.com/golf-clubs/complete-sets"
                                    title="Package Sets at Golf Discount">
                                    <img src={homeLeftPackageSets} alt="package-set" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="qualification__certificate-items">
                        <div class="qualification__certificate-wraper">
                            <Slider {...settings}>
                                {sliderData.map(el => <div className="qualification__certificate-item">
                                         <img src={el.img}
                                             alt={el.alt} />
                                     </div>
                            )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SliderBlock;