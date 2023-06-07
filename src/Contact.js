import './Contact.scss';
import Nav from './Nav';
import Footer from './Footer';

const Contact = () => {
    return (
        <section className="contact">
            <Nav/>
                <div className="homeee">
                    <div className="products-overlay"></div>
                    <h2>Contact Us</h2>
                    <img src="./imgs/arrow down.png" alt="" />
                </div>
                <div className="contacting">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="harare">
                                    <img src="./imgs/contactstore.png" alt="" />
                                    <h3>Harare Bread Factory</h3>
                                    <p>1 Shepperton Road, Graniteside, Harare</p>
                                    <p>+263 242 710334, +263 242 751481</p>
                                    <p>+263 242 710334, +263 242 751481</p>
                                    <div className="voip">
                                        <h5>VOIP:</h5>
                                        <p>08677006178</p>
                                    </div>
                                    <div className="toll">
                                        <h5>Econet Toll Free:</h5>
                                        <p>08080151, 08080152</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="harare">
                                    <img src="./imgs/contactstore.png" alt="" />
                                    <h3>Bulawayo Bread Factory</h3>
                                    <p>22 Bellevue Road, Belmont, Bulawayo</p>
                                    <p>+263 242 710334, +263 242 751481</p>
                                    <p>+263 242 710334, +263 242 751481</p>
                                    <div className="voip">
                                        <h5>VOIP:</h5>
                                        <p>08677006179</p>
                                    </div>
                                    <div className="toll">
                                        <h5>Econet Toll Free:</h5>
                                        <p>08080151, 08080152</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table">
                    <h2>List Of Baker's Inn Depots</h2>
                    <table className='first table-bordered'>
                        <tr>
                            <td><h5>Depot</h5></td>
                            <td><h5>Address</h5></td>
                            <td><h5>Phone Number</h5></td>
                        </tr>
                        <div className="dash"></div>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                    </table>
                    <table className='secondy table-bordered'>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                        <tr>
                        <td><h5>Chinhoyi Depot</h5></td>
                        <td><p>95/94 Josiah Tongogara St,Industrial Site, Chinhoyi</p></td>
                        <td><h5>0772 318 309</h5></td>
                        </tr>
                    </table>
                </div>
                <div className="donation">
                    <div className="container">
                        <div className="image">
                            <img src="./imgs/contactpeople.png" alt="" />
                        </div>
                        <div className="enquiries">
                        <div className="job-enquiries">
                            <h5>For job enquiries , email your CV to</h5>
                            <a href="/">hr@bakersinnzim.com</a>
                        </div> <div className="general-enquiries">
                            <h5>For general enquiries , email</h5>
                            <a href="/">marketing@bakersinnzim.com</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="callback">
                    <h2>Request A Callback</h2>
                    <p>Complete the form below and we will respond within 24 hours.</p>
                <div className="inputs">
                <input type="text" placeholder="Your Title" />
                <input type="text" placeholder="Your Name" />
            </div>
            <div className="inputs">
                <input type="text" placeholder="Your Phone Number" />
                <input type="text" placeholder="Your E-Mail" />
            </div>
            <div className="last-input">
                <input type="text" placeholder="Select Area Of Interest"/>
            </div>
            <div className="last-input">
                <input type="text" placeholder="Nature Of Enquiry"/>
            </div>
            <div className="last-input">
                <input type="text" placeholder="Do You Want To Be Contacted By Phone"/>
            </div>
            <div className="textarea">
                <textarea name="message" placeholder='Message' cols="30" rows="10"></textarea>
            </div>
            <button>SUBMIT</button>
                </div>
            <Footer/>
        </section>
    );
}
 
export default Contact;