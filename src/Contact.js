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
                <div className="tablee">
                    <h2>List Of Baker's Inn Depots</h2>
                            <div className="container">
                            <table class="table table-bordered">
    <thead>
      <tr className='head'>
        <th className='first'>Firstname</th>
        <th className='second'>Lastname</th>
        <th className='third'>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='depot'>Chinhoyi Depot</td>
        <td className='address'>94/95 Josiah Tongogara St, Indusrial Site, Chinhoyi</td>
        <td className='number'>0772 318 309</td>
      </tr>
      <tr>
        <td className='depot'>Bindura Depot</td>
        <td className='address'>461 Luton Road, Industrial Site, Bindura</td>
        <td className='number'>066 2107317</td>
      </tr>
      <tr>
        <td className='depot'>Murehwa Depot</td>
        <td className='address'>Stand number 351, Murehwa Growth Point</td>
        <td className='number'>0652 122 514</td>
      </tr>
      <tr className='first-row'>
        <td className='depot'>Mutare Depot</td>
        <td className='address'>5-7 Glassglow Road, Industrial Site, Mutare</td>
        <td className='number'>020 60715</td>
      </tr>
      <tr className='empty-row'>
        <td className='depot'></td>
        <td className='depot'></td>
        <td className='number'></td>
      </tr>
      <tr className='second-row'>
        <td className='depot'>Hwange Depot</td>
        <td className='address'>29 Derby Drive, Hwange Industrial Site</td>
        <td className='number'>0281 2820105</td>
      </tr>
      <tr className='third-row'>
        <td className='depot'>Chiredzi Depot</td>
        <td className='address'>329 Lion Drive, Chiredzi</td>
        <td className='number'>0231 231 2709</td>
      </tr>
      <tr className='first-row'>
        <td className='depot'>Masvingo Depot</td>
        <td className='address'>1310 Mineral Road, Masving</td>
        <td className='number'>john@example.com</td>
      </tr>
      <tr className='second-row'>
        <td className='depot'>Mary</td>
        <td className='address'>Moe</td>
        <td className='number'>mary@example.com</td>
      </tr>
      <tr className='third-row'>
        <td className='depot'>July</td>
        <td className='address'>Dooley</td>
        <td className='number'>july@example.com</td>
      </tr>
    </tbody>
  </table>
                            </div>
                    
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