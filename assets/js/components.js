class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="section-t-space mt-5">
        <div class="container-fluid-lg">    
            <div class="main-footer section-b-space section-t-space">
                <div class="row g-md-4 g-3">
                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="footer-logo">
                            <div class="theme-logo">
                                <a href="index.html">
                                    <img src="assets/images/logo/1.png" class="blur-up lazyload" alt="">
                                </a>
                            </div>

                            <div class="footer-logo-contain">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio, modi quia. </p>

                                <ul class="address">
                                    <li>
                                        <i data-feather="home"></i>
                                        <a href="javascript:void(0)">123,&nbsp; StreetMarket Avenue, Lagos</a>
                                    </li>
                                    <li>
                                        <i data-feather="mail"></i>
                                        <a href="javascript:void(0)">support@streetmarket.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="footer-title">
                            <h4>Categories</h4>
                        </div>

                        <div class="footer-contain">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Category 1</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Category 2</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Category 3</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Category 4</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Category 5</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">&nbsp;</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl col-lg-2 col-sm-3">
                        <div class="footer-title">
                            <h4>Useful Links</h4>
                        </div>

                        <div class="footer-contain">
                            <ul>
                                <li>
                                    <a href="index.html" class="text-content">Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Shop</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">About Us</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Partner with Us</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-2 col-sm-3">
                        <div class="footer-title">
                            <h4>Help Center</h4>
                        </div>

                        <div class="footer-contain">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Your Account</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Track Order</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Your Wishlist</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">Refunds &amp; Complaints&nbsp;</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="text-content">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-sm-6">
                        <div class="footer-title">
                            <h4>Contact Us</h4>
                        </div>

                        <div class="footer-contact">
                            <ul>
                                <li>
                                    <div class="footer-number">
                                        <i data-feather="phone"></i>
                                        <div class="contact-number">
                                            <h6 class="text-content">Hotline 24/7 :</h6>
                                            <h5>+234 123 4567 890</h5>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="footer-number">
                                        <i data-feather="mail"></i>
                                        <div class="contact-number">
                                            <h6 class="text-content">Email Address :</h6>
                                            <h5>contact@streetmarket.com</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sub-footer section-small-space">
                <div class="reserve">
                    <h6 class="text-content">2023 StreetMarket All rights reserved</h6>
                </div>

                <div class="payment">
                    <img src="assets/images/payment/1.png" class="blur-up lazyload" alt="">
                </div>

                <div class="social-link">
                    <h6 class="text-content">Stay connected :</h6>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/" target="_blank">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('footer-component', Footer);



class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header class="pb-md-4 pb-0">

            <div class="top-nav top-header sticky-header">
                <div class="container-fluid-lg">
                    <div class="row">
                        <div class="col-12">
                            <div class="navbar-top">
                                <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                    <span class="navbar-toggler-icon">
                                        <i class="fa-solid fa-bars"></i>
                                    </span>
                                </button>
                                <a href="index.html" class="web-logo nav-logo">
                                    <img src="assets/images/logo/1.png" class="img-fluid blur-up lazyload" alt="">
                                </a>

                                <div class="middle-box">
                                    <div class="location-box">
                                        <button class="btn location-button" data-bs-toggle="modal"
                                            data-bs-target="#locationModal">
                                            <span class="location-arrow">
                                                <i data-feather="map-pin"></i>
                                            </span>
                                            <span class="locat-name">Your Location</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </button>
                                    </div>

                                    <div class="search-box">
                                        <div class="input-group">
                                            <input type="search" class="form-control" placeholder="I'm searching for..."
                                                aria-label="Recipient's username" aria-describedby="button-addon2">
                                            <button class="btn" type="button" id="button-addon2">
                                                <i data-feather="search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="rightside-box">
                                    <div class="search-full">
                                        <div class="input-group">
                                            <span class="input-group-text">
                                                <i data-feather="search" class="font-light"></i>
                                            </span>
                                            <input type="text" class="form-control search-type" placeholder="Search here..">
                                            <span class="input-group-text close-search">
                                                <i data-feather="x" class="font-light"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <ul class="right-side-menu">
                                        <li class="right-side">
                                            <div class="delivery-login-box">
                                                <div class="delivery-icon">
                                                    <div class="search-box">
                                                        <i data-feather="search"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="right-side">
                                            <a href="javascript:void(0)" class="delivery-login-box">
                                                <div class="delivery-icon">
                                                    <i data-feather="phone-call"></i>
                                                </div>
                                                <div class="delivery-detail">
                                                    <h6>24/7 Delivery</h6>
                                                    <h5>+234 123 456 7890</h5>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="right-side">
                                            <a href="javascript:void(0)l" class="btn p-0 position-relative header-wishlist">
                                                <i data-feather="heart"></i>
                                            </a>
                                        </li>
                                        <li class="right-side">
                                            <div class="onhover-dropdown header-badge">
                                                <button type="button" class="btn p-0 position-relative header-wishlist">
                                                    <i data-feather="shopping-cart"></i>
                                                    <span class="position-absolute top-0 start-100 translate-middle badge">4
                                                        <span class="visually-hidden">unread messages</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </li>
                                        <li class="right-side onhover-dropdown">
                                            <div class="delivery-login-box">
                                                <div class="delivery-icon">
                                                    <i data-feather="user"></i>
                                                </div>
                                                <div class="delivery-detail">
                                                    <h6>Hello,</h6>
                                                    <h5>My Account</h5>
                                                </div>
                                            </div>

                                            <div class="onhover-div onhover-div-login">
                                                <ul class="user-box-name">
                                                    <li class="product-box-contain">
                                                        <i></i>
                                                        <a href="javascript:void(0)">Log In</a>
                                                    </li>

                                                    <li class="product-box-contain">
                                                        <a href="javascript:void(0)">Register</a>
                                                    </li>

                                                    <li class="product-box-contain">
                                                        <a href="javascript:void(0)">Forgot Password</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid-lg">
                <div class="row">
                    <div class="col-12">
                        <div class="header-nav">
                            <div class="header-nav-left">
                                <button class="dropdown-category">
                                    <i data-feather="align-left"></i>
                                    <span>All Categories</span>
                                </button>

                                <div class="category-dropdown">
                                    <div class="category-title">
                                        <h5>Categories</h5>
                                        <button type="button" class="btn p-0 close-button text-content">
                                            <i class="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>

                                    <ul class="category-list">
                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/vegetable.svg" alt="">
                                                <h6>Category 1</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/cup.svg" alt="">
                                                <h6>Category 2</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/meats.svg" alt="">
                                                <h6>Category 3</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/breakfast.svg" alt="">
                                                <h6>Category 4</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/frozen.svg" alt="">
                                                <h6>Category 5</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/biscuit.svg" alt="">
                                                <h6>Category 6</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="onhover-category-list">
                                            <a href="javascript:void(0)" class="category-name">
                                                <img src="assets/svg/1/grocery.svg" alt="">
                                                <h6>Category 7</h6>
                                                <i class="fa-solid fa-angle-right"></i>
                                            </a>

                                            <div class="onhover-category-box w-100">
                                                <div class="list-1">
                                                    <div class="category-title-box">
                                                        <h5>Sub Category</h5>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <a href="javascript:void(0)">List 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Two</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Three</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0)">List Four</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="header-nav-middle">
                                <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                    <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                        <div class="offcanvas-header navbar-shadow">
                                            <h5>Menu</h5>
                                            <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="javascript:void(0)">Home</a>
                                                </li>

                                                <li class="nav-item dropdown dropdown-mega">
                                                    <a class="nav-link dropdown-toggle ps-xl-2 ps-0"
                                                        href="javascript:void(0)" data-bs-toggle="dropdown">Shop</a>

                                                    <div class="dropdown-menu dropdown-menu-2">
                                                        <div class="row">
                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Electronics</h5>
                                                                <a class="dropdown-item" href="javascript:void(0)">Category
                                                                    One</a>

                                                                <a class="dropdown-item" href="javascript:void(0)">Category
                                                                    Two</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Category
                                                                    Three</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Category
                                                                    Four</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Mobile Phones</h5>
                                                                <a class="dropdown-item" href="javascript:void(0)">Category
                                                                    One</a>

                                                                <a class="dropdown-item" href="javascript:void(0)">Category
                                                                    Two</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Category
                                                                    Three</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Category
                                                                    Four</a>
                                                            </div>

                                                            <div class="dropdown-column col-xl-3">
                                                                <h5 class="dropdown-header">Services</h5>
                                                                <a class="dropdown-item" href="javascript:void(0)">Service
                                                                    One</a>

                                                                <a class="dropdown-item" href="javascript:void(0)">Service
                                                                    Two</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Service
                                                                    Three</a>

                                                                <a href="javascript:void(0)" class="dropdown-item">Service
                                                                    Four</a>
                                                            </div>

                                                            <div class="dropdown-column dropdown-column-img col-3"></div>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">Partners</a>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Vendors</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Register as a
                                                                Vendor</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Register as a
                                                                Service
                                                                Proivder</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Register as a
                                                                Delivery
                                                                Agent</a>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle has-sub" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown">About Us</a>

                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Who we
                                                                are</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Our
                                                                Mission</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" Fhref="javascript:void(0)">Terms &
                                                                Conditions</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" Fhref="javascript:void(0)">Privacy
                                                                Policy</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="nav-item dropdown">
                                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)"
                                                        data-bs-toggle="dropdown"> <i
                                                            class="fa fa-question-circle me-2"></i> Help & Support</a>
                                                    <ul class="dropdown-menu">
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">FAQs</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Return
                                                                Policy</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item" href="javascript:void(0)">Return &
                                                                Refunds</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="nav-item dropdown">
                                                    <a class="nav-link" href="javascript:void(0)">Contact Us</a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="header-nav-right">
                                <button class="btn deal-button" data-bs-toggle="modal" data-bs-target="#deal-box">
                                    <i data-feather="zap"></i>
                                    <span>Deal Today</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
  }
}
customElements.define('header-component', Header);