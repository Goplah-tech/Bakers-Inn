import Nav from './Nav';
import TabBoot from './TabBoot';
import Footer from './Footer';
import Factory from './Factory';
import { useState } from 'react';
// import { Link } from 'react';
// import Donation from './Donation'



const Home = () => {


// const completeRange = () => {
//     console.log('clicked complete range')
// }

const title = "About Baker's Inn";
const para = "The freshest sandwiches you can make are with Baker's inn soft white loaf.";
const [showModal , setShowModal]= useState(false)

function toggle (){
    
    setShowModal(function(showModal){
        return !showModal

    })

}

// const handleClick = () => {
//     return '/about'
// }






    return (
        <div className="homepage">
          <Nav/>
      <div className="banner">
        <div className="text">
            <h1>Bringing you the <em>best value</em> at the <span>best prices.</span></h1>
            <div className="tsee-one"></div>
            <div className="tsee-two"></div>
            <p>{para}</p>
            <button>READ MORE</button>
        </div>
        <div className="image-first">
            <img src="./imgs/groupheader bread.png" alt="" />
        </div>
        <div className="image-two">
            <img src="./imgs/African Pattern 2.png" alt="" />
            
        </div>
      </div>
      <div className="about">
        <div className="about-text">
        <div className="first">
            <h1>{title}</h1>
        </div>
        <div className="second">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus <br /> ex quo eveniet  neque ad ipsam labore repellendus voluptatem recusandae <br /> cupiditate culpa saepe praesentium natus suscipit odit inventore minus repellat.  <br /> Repudiandae alias beatae quo voluptatum!</p>
            
                <button>READ MORE</button>
            
        </div>
        </div>
        <div className="images">
            <img src="./imgs/sandwich.png" alt="" />
            <img src="./imgs/Rectangle 14.png" alt="" />
            <img src="./imgs/doughnut tea.png" alt="" />
            <img src="./imgs/slices.png" alt="" />
        </div>
      </div>
      <div className="product">
        <h1>Our Product Range</h1>
        <div className="pics">
            <div className="img-one">
                <img src="./imgs/breadslices.png" alt="" />
                <div className="overlay"></div>
                <h5>Bread</h5>
            </div>
            <div className="img-two">
                <img src="./imgs/pie.png" alt="" />
                <h5>Meat Pies</h5>
            </div>
            <div className="img-three">
                <img src="./imgs/scones.png" alt="" />
                <h5>Scones</h5>
            </div>
            <div className="img-four">
                <img src="./imgs/donuts.png" alt="" />
                <h5>Donuts</h5>
            </div>
        </div>
        <button>VIEW COMPLETE RANGE</button>
      </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="factory-tour">
                    <div className="texting">
                        <h2>Book A Factory Tour</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum <br />  id quae porro molestias adipisci aliquid ducimus, deserunt <br /> Aliquid aperiam cumque non quia nulla, tempore voluptate <br /> consequuntur odio quos nihil optio deleniti numquam magnam  <br /> sunt ipsam adipisci iste rerum magni </p>
                        <button onClick={toggle} >BOOK FACTORY TOUR</button>
                    </div>
                    {/* ////////////////////// */}
                { showModal && <Factory toggle={toggle} />}
               
                </div>
            </div>
            <div className="col-md-6 factory-tour">
                <div className="image-tour">
                    <img src="./imgs/factory bread.png" alt="" />
                </div>
            </div>
        </div>
    </div>
   <section className="donate">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="donation">
                        <div className="image-donation">
                            <img src="./imgs/donate .png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 donation">
                    <div className="texts">
                        <h2>Request A Donation</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Deserunt <br /> temporibus earum necessitatibus dolore ipsa culpa quibusdam esse <br /> rem cum maxime fugit minus excepturi, distinctio reprehenderit <br /> autem quaerat velit ipsum animi. Error, maiores animi?</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >REQUEST DONATION</button>
                    </div>
                    <div class="modal modal-xl fade" id="staticBackdrop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            
                                
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            
                            <div class="modal-body">
                            <h2>Request Product Donations</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quo exercitationem sapiente itaque, aut placeat praesentium perspiciatis <br /> dicta tempora molestiae alias reprehenderit dolores delectus minima modi, voluptatibus vel veniam, maxime quia! Minima.</p>
                                    <div className="inputs">
                                        <input type="text" placeholder="Name of Organisation" />
                                        <input type="text" placeholder="Name of Organisation" />
                                    </div>
                                    <div className="inputs">
                                        <input type="text" placeholder="Name of Organisation" />
                                        <input type="text" placeholder="Name of Organisation" />
                                    </div>
                                    <div className="inputs">
                                        <input type="text" placeholder="Name of Organisation" />
                                        <input type="text" placeholder="Name of Organisation" />
                                    </div>
                                    <div className="inputs">
                                        <input type="text" placeholder="Name of Organisation" />
                                        <input type="text" placeholder="Name of Organisation" />
                                    </div>
                                    <div className="inputs">
                                        <input type="text" placeholder="Name of Organisation" />
                                        <input type="text" placeholder="Name of Organisation" />
                                    </div>
                                   
                                    {/* <div className="textng">
                                        <p>Plant Visit <a href="/">Terms & Conditions</a></p>
                                        <p>Plant Visit <a href="/">Safety Regulations</a></p>
                                    </div>
                                    <div className="long-text">
                                        <div className="box"></div>
                                        <p>Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you <br /> have provided on behalf of your organisation is accurate, full and correct.</p>
                                    </div>
                                    <div className="short-text">
                                        <div className="box"></div>
                                        <p>Have Read The Safety Regulations</p>
                                    </div> */}
                                    <button className='proceed'>PROCEED TO NEXT STEP</button>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
      <div className="kids-corner">
      <div className="overlay">
            <img src="./imgs/African Pattern 2.png" alt="" />
        </div>
        <div className="image">
            <img src="./imgs/mariofinal.png" alt="" />
        </div>
        <div className="text-one">
        <div className="textt">
            <div className="imag-one">
            <h5>kidsCorner</h5>
            </div>
            
        </div>
        <p>Lorem ipsum dolor consectetur adipisicing elit. <br /> Eaque quod, suscipit assumenda  at recusandae est. <br /> Ipsam dolorem unde sit exercitationem sed!</p>
        <button>PLAY GAMES</button>
        </div>
      </div>
      <TabBoot/>
      <section className="message">
        <div className="container email">
            <div className="top-pic">
                <img src="./imgs/African Pattern 2.png" alt="" />
            </div>
            <div className="row">
                <div className="col-md-7">
                    <div className="heading">
                        <h2>Get Notified About <br /> Promotions We Offer</h2>
                    </div>
                    <div className="input">
                        <input type="text" placeholder='your email' />
                            <button>SUBMIT</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="bread">
                        <img src="./imgs/bottom bread group.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
        </div>
      
    );
}
 
export default Home;