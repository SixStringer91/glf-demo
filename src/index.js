import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function delayGallery() {
  window.$('.qualification__certificate-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    dots: true,
    dotsClass: "my-dots",
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
    autoplay: true
  });
}
setTimeout(delayGallery)