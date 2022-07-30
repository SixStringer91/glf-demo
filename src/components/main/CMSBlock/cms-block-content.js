export const data = `
<main id="maincontent" class="page-main"> <a id="contentarea" tabindex="-1"></a>
<div class="page messages">
    <div data-placeholder="messages"></div>
    <div data-bind="scope: 'messages'">
        <!-- ko if: cookieMessages && cookieMessages.length > 0 -->
        <div aria-atomic="true" role="alert" data-bind="foreach: { data: cookieMessages, as: 'message' }"
            class="messages">
            <div
                data-bind="attr: { class: 'message-' + message.type + ' ' + message.type + ' message', 'data-ui-id': 'message-' + message.type }">
                <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
            </div>
        </div><!-- /ko -->
        <!-- ko if: messages().messages && messages().messages.length > 0 -->
        <div aria-atomic="true" role="alert" class="messages"
            data-bind="foreach: { data: messages().messages, as: 'message' }">
            <div
                data-bind="attr: { class: 'message-' + message.type + ' ' + message.type + ' message', 'data-ui-id': 'message-' + message.type }">
                <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
            </div>
        </div><!-- /ko -->
    </div>
</div>
<div class="columns">
    <div class="column main"><input name="form_key" type="hidden" value="kHuO5sT1ZtrT5BmJ" />
        <!-- Yotpo - Add body class -->
        <!--/ Yotpo - Add body class -->
        <!-- Yotpo - Widget Script -->
        <!--/ Yotpo - Widget Script -->
        <script data-role="msrp-popup-template" type="text/x-magento-template">
<div id="map-popup-click-for-price" class="map-popup">
<div class="popup-header">
<strong class="title" id="map-popup-heading-price"></strong></div>
<div class="popup-content">
<div class="map-info-price" id="map-popup-content">
    <div class="price-box">
        <div class="map-msrp" id="map-popup-msrp-box">
            <span class="label">Price</span>
            <span class="old-price map-old-price" id="map-popup-msrp">
                <span class="price"></span></span></div>
        <div class="map-price" id="map-popup-price-box">
            <span class="label">Actual Price</span>
            <span id="map-popup-price" class="actual-price"></span></div></div>
    <form action="" method="POST" class="map-form-addtocart">
        <input type="hidden" name="product" class="product_id" value="" />
        <button type="button"
                title="Add&#x20;to&#x20;Cart"
                class="action tocart primary">
            <span>Add to Cart</span></button>
        <div class="additional-addtocart-box">
            </div></form></div>
<div class="map-text" id="map-popup-text">
    Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.</div></div></div></script>
        <script data-role="msrp-info-template" type="text/x-magento-template">
<div id="map-popup-what-this" class="map-popup">
<div class="popup-header">
<strong class="title" id="map-popup-heading-what-this"></strong></div>
<div class="popup-content">
<div class="map-help-text" id="map-popup-text-what-this">
    Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.</div></div></div></script>
        <script data-role="msrp-map-template" type="text/x-magento-template">
<div id="map-popup-click-for-price" class="map-popup">
<div class="popup-header">
    <strong class="title" id="map-popup-heading-price"></strong></div>
<div class="popup-content">
    <div class="map-text" id="map-popup-text">
        Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.</div>
    <div class="map-info-price btn-bottom" id="map-popup-content">
        <form action="" method="POST" class="map-form-addtocart">
            <input type="hidden" name="product" class="product_id" value="" />
            <button type="button"
                    title="View&#x20;price&#x20;in&#x20;cart"
                    class="action tocart primary">
                <span>View price in cart</span></button>
            <div class="additional-addtocart-box">
                </div></form></div></div></div></script>

        <!-- MAIN CONTAINER START -->
        <div class=carousel-block>
        <div class="qualification">
        <div class="qualification__certificate">
          <div class="qualification__certificate-descr">
          <div>
          <div>
              <a href="https://www.golfdiscount.com/closeouts/apparel"
                  title="Closeout Golf Apparel at Golf Discount"><img
                      src="https://images.golfdiscount.com/images/home/2022/left/home-left-closeout-apparel.jpg"
                  /></a>
                  <a href="https://www.golfdiscount.com/golf-clubs/complete-sets"
                      title="Package Sets at Golf Discount"><img
                          src="https://images.golfdiscount.com/images/home/2022/left/home-left-package-sets.jpg"
                  /></a>
          </div>
      </div>
            </div>
          <div class="qualification__certificate-items">
            <div class="qualification__certificate-wraper">
              <div class="qualification__certificate-slider">
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220518-callaway-mavrik.jpg"
                         alt="Shop Callaway Mavrik Woods and Irons at GolfDiscount.com" />
                </div>
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220701-ping-g410.jpg"
                    alt="Shop PING G410 Series at GolfDiscount.com" />
                </div>
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220613-cobra-mim-wedges.jpg"
                alt="Cobra MIM Wedges at GolfDiscount.com" />
                </div>
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220708-cobra-radspeed.jpg"
                    alt="Price Too Low to Show on Cobra Radspeed at GolfDiscount.com" />
                </div>
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220322-cleveland-cbx2.jpg"
                alt="Cleveland CBX 2 Wedges at GolfDiscount.com" />
                </div>
                <div class="qualification__certificate-item">
                <img src="https://images.golfdiscount.com/images/home/2022/flash/home-flash-220713-tm-sim.jpg"
                    alt="Shop TaylorMade SIM Max and SIM2 Woods & Irons at GolfDiscount.com" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <!-- OCYC -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced">
                <div class="grid12-12 banner">
                    <a href="https://www.golfdiscount.com/our-cost-is-your-cost-specials"
                        title="OCYC (Our Cost is Your Cost) will be a product that is priced at an extreme discount, many times below original wholesale cost. OCYC (Our Cost is Your Cost) prices may not be exactly what we paid for the product at the time of purchase, but priced accordingly considering all of the costs from in-bound shipping, warehousing, advertising, labor, etc."><img
                            src="https://images.golfdiscount.com/images/home/2022/ocyc/home-ocyc-20220725.jpg"
                            alt="Our Cost is Your Cost Special" /></a>
                </div>
            </div>
        </div>
        <!-- NEW FOR 2022 -->
        <!--
<div class="nested-container">
<div class="page-banners grid-container-spaced">
<div class="grid12-12 banner">
<a href="https://www.golfdiscount.com/featured-products/new-for-2022" title="Shop New for 2022 Golf Clubs at GolfDiscount.com"><img src="https://images.golfdiscount.com/images/home/2022/category/home-220324-new-for-2022.jpg" alt="Shop New for 2022 Golf Clubs at GolfDiscount.com" /></a>
</div>
</div>
</div>
-->
        <!-- FEAT CALLWAY WEDGES AND COBRA SPEEDZONE -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced" style="justify-content:space-evenly;">
                <div class="grid12-6">
                    <a href="https://www.golfdiscount.com/featured-products/brand/callaway/wedges"
                        title="Save on Featured Callaway Wedges at GolfDiscount.com"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220613-callaway-wedges-2x.jpg"
                            alt="Save on Featured Callaway Wedges at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
                <div class="grid12-6 margin-center">
                    <a href="https://www.golfdiscount.com/brand/cobra/speedzone/woods"
                        title="Blowout Prices on Cobra Speedzone Woods at GolfDiscount.com"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220519-cobra-speedzone-2x.jpg"
                            alt="Blowout Prices on Cobra Speedzone Woods at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
            </div>
        </div>
        <!-- COBRA IRONS -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced">
                <div class="grid12-12 banner">
                    <a href="https://www.golfdiscount.com/featured-products/brand/cobra/irons"
                        title="Closeout Cobra KING Forged Tec and MIM Tour Irons at GolfDiscount.com"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220606-cobra-irons.jpg"
                            alt="Shop Closeout Cobra KING Forged Tec and MIM Tour Irons at GolfDiscount.com" /></a>
                </div>
            </div>
        </div>
        <!-- TAYLORMADE TP5 BREAKFAST BALLS AND TAYLORMADE TOUR RESPONSE STRIPE BALLS -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced" style="justify-content:space-evenly;">
                <div class="grid12-6">
                    <a href="https://www.golfdiscount.com/golf-balls/brands/taylormade/tp5/pix-bacon-and-eggs"
                        title="Shop TaylorMade TP5 Breakfast Golf Balls at GolfDiscount.com"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220722-tm-tp5-breakfast.jpg"
                            alt="Shop TaylorMade TP5 Breakfast Golf Balls at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
                <div class="grid12-6 margin-center">
                    <a href="https://www.golfdiscount.com/golf-balls/brands/taylormade/tour-response-stripe"
                        title="TaylorMade Tour Response Stripe Golf Balls at GolfDiscount.com"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220722-tm-tour-response-stripe.jpg"
                            alt="TaylorMade Tour Response Stripe Golf Balls at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
            </div>
        </div>
        <!-- CLOSEOUT SKECHERS -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced">
                <div class="grid12-12 banner">
                    <a href="https://www.golfdiscount.com/brand/skechers/closeouts"
                        title="Closeout Skechers Golf Shoes"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220722-skechers-closeout.jpg"
                            alt="Closeut Skechers Golf Shoes at GolfDiscount.com" /></a>
                </div>
            </div>
        </div>
        <!-- SIDE BY SIDE BANNERS -->
        <div class="nested-container">
            <div class="page-banners grid-container-spaced" style="justify-content:space-evenly;">
                <div class="grid12-6">
                    <a href="https://www.golfdiscount.com/closeouts/golf-clubs"
                        title="Closeout Golf Clubs at Golf Discount"> <img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220104-golf-clubs.jpg"
                            alt="Closeout Golf Clubs at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
                <div class="grid12-6 margin-center">
                    <a href="https://www.golfdiscount.com/closeouts/golf-balls"
                        title="Golf Ball Deals at Golf Discount"> <img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220104-golf-balls.jpg"
                            alt="Closeout Golf Balls at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
            </div>
        </div>
        <div class="nested-container">
            <div class="page-banners grid-container-spaced" style="justify-content:space-evenly;">
                <div class="grid12-6">
                    <a href="https://www.golfdiscount.com/closeouts/apparel"
                        title="Closeout Golf Apparel at Golf Discount"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220104-apparel.jpg"
                            alt="Closeout Golf Apparel at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /></a>
                </div>
                <div class="grid12-6 margin-center">
                    <a href="https://www.golfdiscount.com/closeouts/golf-shoes"
                        title="Closeout Golf Shoes at Golf Discount"><img
                            src="https://images.golfdiscount.com/images/home/2022/category/home-220104-golf-shoes.jpg"
                            alt="Closeout Golf Shoes at GolfDiscount.com"
                            style="max-width:100%; width:627px;" /> </a>
                </div>
            </div>
        </div>
        <div>
            <div class="nosto_element" id="frontpage-nosto-2"></div>
            <!-- CLOSEOUTS -->
            <div class="nested-container">
                <h2>Shop Discount Golf Equipment</h2>
                <div class="page-banners grid-container-spaced">
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/golf-clubs"
                            title="Closeout Golf Clubs"></a><a
                            href="https://www.golfdiscount.com/closeouts/golf-clubs"
                            title="Closeout Golf Clubs"> <img alt="Discount Golf Clubs"
                                class="closeout-golf-clubs-img"
                                src="https://images.golfdiscount.com/images/home/2021/closeouts/home-closeout-golf-clubs-20211223.jpg" />
                            <h4 class="closeout-golf-clubs-link">Closeout Golf Clubs</h4>
                        </a>
                    </div>
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/golf-bags"
                            title="Closeout Golf Bags"></a><a
                            href="https://www.golfdiscount.com/closeouts/golf-bags"
                            title="Closeout Golf Bags"> <img alt="Discount Golf Bags"
                                class="closeout-golf-bags-img"
                                src="https://www.golfdiscount.com/media/wysiwyg/category/closeouts/closeouts-bags_1.jpg" />
                            <h4 class="closeout-golf-bags-link">Closeout Golf Bags</h4>
                        </a>
                    </div>
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/apparel"
                            title="Closeout Apparel"></a><a
                            href="https://www.golfdiscount.com/closeouts/apparel" title="Closeout Apparel">
                            <img alt="Discount Golf Apparel" class="closeout-apparel-img"
                                src="https://www.golfdiscount.com/media/wysiwyg/category/closeouts/closeouts-apparel.jpg" />
                            <h4 class="closeout-apparel-link">Closeout Apparel</h4>
                        </a>
                    </div>
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/golf-balls"
                            title="Closeout Golf Balls"></a><a
                            href="https://www.golfdiscount.com/closeouts/golf-balls"
                            title="Closeout Golf Balls"> <img alt="Discount Golf Balls"
                                class="closeout-balls-img"
                                src="https://images.golfdiscount.com/images/home/2021/closeouts/home-closeout-golf-balls-20211223.jpg" />
                            <h4 class="closeout-balls-link">Closeout Golf Balls</h4>
                        </a>
                    </div>
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/golf-shoes"
                            title="Closeout Golf Shoes"></a><a
                            href="https://www.golfdiscount.com/closeouts/golf-shoes"
                            title="Closeout Golf Shoes"> <img alt="Discount Golf Shoes"
                                class="closeout-shoes-img"
                                src="https://images.golfdiscount.com/images/home/2021/closeouts/home-closeout-golf-shoes-20211223.jpg" />
                            <h4 class="closeout-shoes-link">Closeout Golf Shoes</h4>
                        </a>
                    </div>
                    <div class="grid12-2 banner" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/closeouts/accessories"
                            title="Closeout Gloves and Accessories"></a><a
                            href="https://www.golfdiscount.com/closeouts/accessories"
                            title="Closeout Gloves and Accessories"> <img
                                alt="Discount Golf Gloves and Accessories"
                                class="closeout-golf-accessories-img"
                                src="https://www.golfdiscount.com/media/wysiwyg/category/closeouts/accessories_golf_glove.jpg" />
                            <h4 class="closeout-golf-accessories-link">Closeout Accessories</h4>
                        </a>
                    </div>
                </div>
            </div>
            <!-- SHOP BY CATEGORY -->
            <div class="container">
                <div class="page-title">
                    <h2>Shop By Category</h2>
                </div>
                <div class="list">
                    <a href="golf-clubs" title="Golf Clubs"></a><a href="golf-clubs" title="Golf Clubs">
                        <img alt="Shop by Category - Golf Clubs" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/clubs.jpg" /></a>
                    <h2 class="golf-clubs-list-link">Golf Clubs</h2>
                    <ul>
                        <li>
                            <h3 class="drivers-list-sbc"><a href="golf-clubs/drivers"
                                    title="Drivers">Drivers</a></h3>
                        </li>
                        <li>
                            <h3 class="fairway-wood-list-sbc"><a href="golf-clubs/fairway-woods"
                                    title="Fairway Woods">Fairway Woods</a></h3>
                        </li>
                        <li>
                            <h3 class="hybrids-list-link"><a href="golf-clubs/hybrids"
                                    title="Hybrids">Hybrids</a></h3>
                        </li>
                        <li>
                            <h3 class="irons-list-link"><a href="golf-clubs/irons" title="Irons">Irons</a>
                            </h3>
                        </li>
                        <li>
                            <h3 class="wedges-list-link"><a href="golf-clubs/wedges"
                                    title="Wedges">Wedges</a></h3>
                        </li>
                        <li>
                            <h3 class="putters-list-link"><a href="golf-clubs/putters"
                                    title="Putters">Putters</a></h3>
                        </li>
                        <li>
                            <h3 class="complete-sets-list-link"><a href="golf-clubs/complete-sets"
                                    title="Complete Sets">Complete Sets</a></h3>
                        </li>
                        <li>
                            <h3 class="closeout-clubs-sbc"><a href="closeouts/golf-clubs"
                                    title="Closeout Golf Clubs">Closeout Golf Clubs</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="golf-bags" title="Golf Bags"></a><a href="golf-bags" title="Golf Bags"> <img
                            alt="Shop by Category - Golf Bags" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/bags.jpg" /></a>
                    <h2 class="bags-list-link">Golf Bags</h2>
                    <ul>
                        <li>
                            <h3 class="stand-bags-list"><a href="golf-bags/stand-bags"
                                    title="Stand Bags">Stand Bags</a></h3>
                        </li>
                        <li>
                            <h3 class="cart-bags-list"><a href="golf-bags/cart-bags" title="Cart Bags">Cart
                                    Bags</a></h3>
                        </li>
                        <li>
                            <h3 class="travel-bags-list"><a href="golf-bags/travel-bags"
                                    title="Travel Bags">Travel Bags</a></h3>
                        </li>
                        <li>
                            <h3 class="closeout-bags-list"><a href="closeouts/golf-bags"
                                    title="Closeout Bags">Closeout Golf Bags</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="golf-balls" title="Golf Balls"></a><a href="golf-balls" title="Golf Balls">
                        <img alt="Shop by Category - Golf Balls" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/balls2.jpg" /></a>
                    <h2 class="balls-list-link">Golf Balls</h2>
                    <ul>
                        <li>
                            <h3 class="bridgestone-balls-list"><a href="golf-balls/brands/bridgestone"
                                    title="Bridgestone Golf Balls">Bridgestone</a></h3>
                        </li>
                        <li>
                            <h3 class="callaway-balls-list"><a href="golf-balls/brands/callaway"
                                    title="Callaway Golf Balls">Callaway</a></h3>
                        </li>
                        <li>
                            <h3 class="srixon-balls-list"><a href="golf-balls/brands/srixon"
                                    title="Srixon Golf Balls">Srixon</a></h3>
                        </li>
                        <li>
                            <h3 class="taylormade-balls-list"><a href="golf-balls/brands/taylormade"
                                    title="TaylorMade Golf Balls">TaylorMade</a></h3>
                        </li>
                        <li>
                            <h3 class="titleist-balls-list"><a href="golf-balls/brands/titleist"
                                    title="Titleist Golf Balls">Titleist</a></h3>
                        </li>
                        <li>
                            <h3 class="wilson-balls-list"><a href="golf-balls/brands/wilson"
                                    title="Wilson Golf Balls">Wilson Staff</a></h3>
                        </li>
                        <li>
                            <h3 class="closoeut-balls-list"><a href="closeouts/golf-balls"
                                    title="Closeout Golf Balls">Closeout Golf Balls</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="shoes" title="Golf Shoes"></a><a href="shoes" title="Golf Shoes"> <img
                            alt="Shop by Category - Golf Shoes" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/shoes.jpg" /></a>
                    <h2>Golf Shoes</h2>
                    <ul>
                        <li>
                            <h3 class="mens-shoes-list"><a href="shoes/mens"
                                    title="Men's Golf Shoes">Men's</a></h3>
                        </li>
                        <li>
                            <h3 class="womens-shoes-list"><a href="shoes/womens"
                                    title="Women's Golf Shoes">Women's</a></h3>
                        </li>
                        <li>
                            <h3 class="closeout-shoes-list"><a href="closeouts/golf-shoes"
                                    title="Closeout Golf Shoes">Closeout Golf Shoes</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="apparel" title="Apparel"></a><a href="apparel" title="Apparel"> <img
                            alt="Shop by Category - Apparel" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/apparel.jpg" /></a>
                    <h2>Apparel</h2>
                    <ul>
                        <li>
                            <h3 class="headwear-list"><a href="apparel/accessories/headwear"
                                    title="Golf Headwear">Headwear</a></h3>
                        </li>
                        <li>
                            <h3 class="outerwear-list"><a href="apparel/outerwear"
                                    title="Golf Outerwear">Outerwear</a></h3>
                        </li>
                        <li>
                            <h3 class="pants-list"><a href="apparel/mens/pants" title="Golf Pants">Pants</a>
                            </h3>
                        </li>
                        <li>
                            <h3 class="shorts-list"><a href="apparel/mens/shorts"
                                    title="Golf Shorts">Shorts</a></h3>
                        </li>
                        <li>
                            <h3 class="shirts-list"><a href="apparel/mens/polos"
                                    title="Golf Shirts">Shirts</a></h3>
                        </li>
                        <li>
                            <h3 class="belts-list"><a href="apparel/accessories/belts"
                                    title="Golf Belts">Belts</a></h3>
                        </li>
                        <li>
                            <h3 class="eyewear-list"><a href="apparel/accessories/eyewear"
                                    title="Golf Eyewear">Eyewear</a></h3>
                        </li>
                        <li>
                            <h3 class="socks-list"><a href="apparel/accessories/socks"
                                    title="Golf Socks">Socks</a></h3>
                        </li>
                        <li>
                            <h3 class="gloves-list"><a href="accessories/on-course/gloves"
                                    title="Golf Gloves">Gloves</a></h3>
                        </li>
                        <li>
                            <h3 class="apparel-closeouts-list"><a href="closeouts/apparel"
                                    title="Golf Apparel Closeouts">Closeout Apparel</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="rangefinders" title="GPS &amp; Rangefinders"></a><a href="rangefinders"
                        title="GPS &amp; Rangefinders"> <img alt="Shop by Category - Rangefinders"
                            class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/rangefinder.jpg" /></a>
                    <h2>Rangefinders</h2>
                    <ul>
                        <li>
                            <h3 class="bushnell-rangefinders-list"><a href="rangefinders/gps/bushnell"
                                    title="Bushnell Rangefinders">Bushnell</a></h3>
                        </li>
                        <li>
                            <h3 class="garmin-rangefinders-list"><a href="rangefinders/gps/garmin"
                                    title="Garmin Rangefinders">Garmin</a></h3>
                        </li>
                        <li>
                            <h3 class="golf-buddy-rangefinders-list"><a href="rangefinders/gps/golf-buddy"
                                    title="Golf Buddy Rangefinders">Golf Buddy</a></h3>
                        </li>
                        <li>
                            <h3 class="leupold-rangefinders-list"><a
                                    href="rangefinders/rangefinders/leupold"
                                    title="Leupold Rangefinders">Leupold</a></h3>
                        </li>
                        <li>
                            <h3 class="leupold-rangefinders-list"><a href="rangefinders/rangefinders/nikon"
                                    title="Nikon Rangefinders">Nikon</a></h3>
                        </li>
                        <li>
                            <h3 class="leupold-rangefinders-list"><a
                                    href="rangefinders/rangefinders/precision-pro"
                                    title="Precision Pro Rangefinders">Precision Pro</a></h3>
                        </li>
                        <li>
                            <h3 class="rangefinder-closeouts-list"><a href="closeouts/gps-rangefinders"
                                    title="Rangefinder Closeouts">Closeout Rangefinders</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="accessories" title="Golf Accessories"></a><a href="accessories"
                        title="Golf Accessories"> <img alt="Shop by Category - Accessories" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/gloves.jpg" /></a>
                    <h2>Accessories</h2>
                    <ul>
                        <li>
                            <h3><a href="accessories/on-course" title="Golf Course Acessories">Course
                                    Accessories</a></h3>
                        </li>
                        <li>
                            <h3><a href="golf-carts/push-cart-accessories" title="Cart Accessories">Cart
                                    Accessories</a></h3>
                        </li>
                        <li>
                            <h3><a href="accessories/training-aids" title="Golf Training Aids">Training
                                    Aids</a></h3>
                        </li>
                        <li>
                            <h3><a href="closeouts/accessories"
                                    title="Golf Accessory Closeouts">Closeouts</a></h3>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <a href="brand" title="Top Golf Brands"></a><a href="brand" title="Top Golf Brands">
                        <img alt="Shop by Category - Top Golf Brands" class="thumb"
                            src="https://www.golfdiscount.com/media/wysiwyg/infortis/ultimo/home/category-icons/brands.jpg" /></a>
                    <h2>Top Brands</h2>
                    <ul>
                        <li>
                            <h3><a href="brand/adidas" title="Adidas Golf">Adidas</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/callaway" title="Callaway Golf">Callaway</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/cobra" title="Cobra Golf">Cobra</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/footjoy" title="FootJoy Golf">FootJoy</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/nike" title="Nike Golf">Nike</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/ping" title="Ping Golf">Ping</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/puma" title="Puma Golf">Puma</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/taylormade" title="TaylorMade Golf">TaylorMade</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/skechers" title="Skechers Golf">Skechers</a></h3>
                        </li>
                        <li>
                            <h3><a href="brand/titleist" title="Titleist Golf">Titleist</a></h3>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- TOP BRANDS -->
            <div class="nested-container hide-below-768" style="margin: 45px 0 45px 0;">
                <h2 style="text-align: center;">Authorized Retailer of the Best Brands in Golf</h2>
                <div class="grid-container-spaced">
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/adidas" title=" adidas Golf"><img
                                alt="adidas" class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/adidas.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/bridgestone"><img alt="Bridgestone"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/bridgestone.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/callaway"><img alt="callaway"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/callaway.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/cleveland"><img alt="cleveland"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/cleveland.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/cobra"><img alt="cobra"
                                class="fade-on-hover"
                                src="https://images.golfdiscount.com/images/home/2022/brand/cobra-2022.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/footjoy"><img alt="FootJoy"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/footjoy.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/nike"><img alt="Nike"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/ads/nike_swoosh_black-SMALL_2.png" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/ping"><img alt="PING"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/ping.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/taylormade"><img alt="TaylorMade"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/taylormade.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/titleist"><img alt="Titleist"
                                class="fade-on-hover"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/titleist.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/tour-edge"><img alt="Tour Edge"
                                class="fade-on-hover"
                                src="https://images.golfdiscount.com/images/home/2022/brand/tour_edge-2022.jpg" /></a>
                    </div>
                    <div class="grid12-2" style="text-align: center;">
                        <a href="https://www.golfdiscount.com/brand/wilson-staff"><img alt="Wilson Golf"
                                src="https://www.golfdiscount.com/media/wysiwyg/infortis/brands/wilson.JPG" /></a>
                    </div>
                </div>
            </div>
            <div class="nested-container about">
                <h1 style="margin-bottom: 5px;">Golf Discount - Online since 1995</h1>
                <p>At Golf Discount we've grown to learn what's important to you, our customer. Our entire
                    business is molded to meet your needs starting with Customer Service as we have a
                    veteran staff of golfers awaiting your <a href="tel:+18003944653"
                        onclick="ga('send', 'event', 'Phone', 'click-call');"
                        title="Hit us on the telly at 1-800-394-GOLF (4653)"><strong>calls</strong></a>,
                    chats &amp; <a href="mailto:sales@golfdiscount.com"
                        title="Drop us a digital message"><strong>emails</strong></a>.</p>

                <p>Shop with confidence as we offer a price match guarantee that applies after your
                    purchase. All orders shipping within the US over $99 include Free Shipping and
                    convenient order tracking. With over 40 years in the golf industry and 5 retail
                    locations we have built strong relationship with all the top golf brands. This history
                    provides us exclusive opportunites such as first access and closeout buys allowing us to
                    pass the discount along.</p>

                <p><em>GolfDiscount.com - Why pay more for golf equipment?</em></p>
            </div>
        </div>
        <!-- MAIN CONTAINER END -->

        <!-- SLIDER ADS -->
        <div id="searchspringRecomendationContent"></div>
    </div>
</div>
<div class="mm-searchspring_element" id="frontpage-mm-searchspring-1">
    <div class="mm-searchspring-default mm-searchspring-5-products">
        <div class="mm-searchspring-heading">Recommendations For You</div>
        <ul class="mm-searchspring-product-list">
            <li class="mm-searchspring-product-list-item mm-searchspring-discounted">
                <div class="mm-searchspring-product-image"><a
                        href="https://www.golfdiscount.com/adidas-ultimate365-shorts"><img
                            src="https://www.golfdiscount.com/media/catalog/product/cache/f27342097bb2abb3a49036542fcec024/g/o/golf-apparel-adidas-ultimate365-shorts-black.jpg"
                            alt="Adidas Ultimate365 Shorts"></a></div>
                <div class="mm-searchspring-product-info"><a
                        href="https://www.golfdiscount.com/adidas-ultimate365-shorts">
                        <div class="mm-searchspring-product-brand">Adidas</div>
                        <div class="mm-searchspring-product-name">Adidas Ultimate365 Shorts</div>
                        <div class="mm-searchspring-price-info"><span
                                class="mm-searchspring-current-price-special"><span
                                    class="mm-searchspring-product-price money">$39.99</span></span><span
                                class="mm-searchspring-old-price"><span class="mm-searchspring-product-price"><small
                                        class="money">$64.99</small></span></span></div>
                    </a></div>
            </li>
            <li class="mm-searchspring-product-list-item mm-searchspring-discounted">
                <div class="mm-searchspring-product-image"><a
                        href="https://www.golfdiscount.com/taylormade-sim-max-individual-iron"><img
                            src="https://www.golfdiscount.com/media/catalog/product/cache/f27342097bb2abb3a49036542fcec024/t/a/taylormade-sim-sand-wedge-itempicture.jpg"
                            alt="TaylorMade SIM Max Individual Iron"></a></div>
                <div class="mm-searchspring-product-info"><a
                        href="https://www.golfdiscount.com/taylormade-sim-max-individual-iron">
                        <div class="mm-searchspring-product-brand">TaylorMade</div>
                        <div class="mm-searchspring-product-name">TaylorMade SIM Max Individual Iron</div>
                        <div class="mm-searchspring-price-info"><span
                                class="mm-searchspring-current-price-special"><span
                                    class="mm-searchspring-product-price money">$79.99</span></span><span
                                class="mm-searchspring-old-price"><span class="mm-searchspring-product-price"><small
                                        class="money">$112.99</small></span></span></div>
                    </a></div>
            </li>
            <li class="mm-searchspring-product-list-item mm-searchspring-discounted">
                <div class="mm-searchspring-product-image"><a
                        href="https://www.golfdiscount.com/taylormade-sim-max-irons"><img
                            src="https://www.golfdiscount.com/media/catalog/product/cache/f27342097bb2abb3a49036542fcec024/g/o/golf-iron-taylormade-sim-max-angle-itempicture.jpg"
                            alt="TaylorMade SIM Max Irons"></a></div>
                <div class="mm-searchspring-product-info"><a
                        href="https://www.golfdiscount.com/taylormade-sim-max-irons">
                        <div class="mm-searchspring-product-brand">TaylorMade</div>
                        <div class="mm-searchspring-product-name">TaylorMade SIM Max Irons</div>
                        <div class="mm-searchspring-price-info"><span class="mm-searchspring-current-price"><span
                                    class="mm-searchspring-product-price money">$599</span></span></div>
                    </a></div>
            </li>
            <li class="mm-searchspring-product-list-item mm-searchspring-discounted">
                <div class="mm-searchspring-product-image"><a
                        href="https://www.golfdiscount.com/callaway-2019-strata-12-piece-complete-set"><img
                            src="https://www.golfdiscount.com/media/catalog/product/cache/f27342097bb2abb3a49036542fcec024/2/0/2019-callaway-strata-complete-set_02a.jpg"
                            alt="Callaway 2019 Strata 12-Piece Complete Set"></a></div>
                <div class="mm-searchspring-product-info"><a
                        href="https://www.golfdiscount.com/callaway-2019-strata-12-piece-complete-set">
                        <div class="mm-searchspring-product-brand">Callaway</div>
                        <div class="mm-searchspring-product-name">Callaway 2019 Strata 12-Piece Complete Set</div>
                        <div class="mm-searchspring-price-info"><span class="mm-searchspring-current-price"><span
                                    class="mm-searchspring-product-price money">$399.99</span></span></div>
                    </a></div>
            </li>
            <li class="mm-searchspring-product-list-item mm-searchspring-discounted">
                <div class="mm-searchspring-product-image"><a
                        href="https://www.golfdiscount.com/catalog/product/view/id/186606/s/taylormade-tp5x-practice-bagged-golf-balls/"><img
                            src="https://www.golfdiscount.com/media/catalog/product/cache/f27342097bb2abb3a49036542fcec024/g/o/golf-balls-taylormade-tp5x-bagged-practice-balls-white-itempicture.jpg"
                            alt="TaylorMade 2019 TP5x Practice Bagged Golf Balls"></a></div>
                <div class="mm-searchspring-product-info"><a
                        href="https://www.golfdiscount.com/catalog/product/view/id/186606/s/taylormade-tp5x-practice-bagged-golf-balls/">
                        <div class="mm-searchspring-product-brand">TaylorMade</div>
                        <div class="mm-searchspring-product-name">TaylorMade 2019 TP5x Practice Bagged Golf Balls</div>
                        <div class="mm-searchspring-price-info"><span
                                class="mm-searchspring-current-price-special"><span
                                    class="mm-searchspring-product-price money">$24.99</span></span><span
                                class="mm-searchspring-old-price"><span class="mm-searchspring-product-price"><small
                                        class="money">$29.99</small></span></span></div>
                    </a></div>
            </li>
        </ul>
    </div>
</div>
</main>
`