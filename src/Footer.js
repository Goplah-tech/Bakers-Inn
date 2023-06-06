import './Footer.scss'


const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="first-line"></div>
                    </div>
                    <div className="col-md-2 footer-logo">
                        <img src="./imgs/footer logo.png" alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="first-line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 feed">
                        <h5>Instagram Feed</h5>
                        <div className="imagz">
                            <img src="./imgs/HOTBUN.png" alt="" />
                            <img src="./imgs/insta feed.png" alt="" />
                            <img src="./imgs/instafeed.png" alt="" />
                        </div>
                        <div className="links">
                            <div className="twit">
                                <img src="./imgs/twitter.png" alt="" />
                            </div>
                            <div className="facebook">
                                <img src="./imgs/facebook.png" alt="" />
                            </div>
                            <div className="linkedin">
                                <img src="./imgs/linkedin.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 lotoma">
                        <div className="location">
                            <h5>Our Location</h5>
                            <p>1 Shepperton Road,</p>
                            <p>Graniteside,</p>
                            <p>Harare,</p>
                            <p>Zimbabwe</p>
                        </div>
                        <div className="intouch">
                            <h5>Get In Touch With Us</h5>
                            <div className="phone">
                                <img src="./imgs/call.png" alt="" />
                                <p>08080151</p>
                            </div>
                            <p>08080152</p>
                            <p>+263 242 751 481</p>
                            <p>+263 242 710 334</p>
                            <div className="marketing">
                                <img src="./imgs/mail.png" alt="" />
                                <p>marketing@bakersinnzim.com</p>
                            </div>
                        </div>
                        <div className="sitemap">
                            <h5>Sitemap</h5>
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Products</p>
                            <p>Recipes</p>
                            <p>Kids Corner</p>
                        </div>
                    </div>
                </div>
                <div className="second-line"></div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="innscor">
                            <p>Subsidiary of</p>
                            <img src="./imgs/inscor_logo@2x 1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 right">
                        <p>Copyright & 2023 Bakers Inn. All rights reserved. Site by  <span> Lovemore Mupini </span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;