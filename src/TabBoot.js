
const TabBoot = () => {

    const head = "Baker's Recipes";
    const secondHead = "Sweet Shortbread";
    const thirdHead = "Salmon Strips";
    const firstHead = "Shwarma Sandwich"


    return (
        <div className="bakerRecipe">
            <h2>{ head }</h2>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">For Kids</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">For Vegans</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">For Family</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">




  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">    <div className="sandwiches">
            <div className="sandwich-one">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ firstHead }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>





                        <div class="modal modal-xl fade first" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/sandwich.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Shwarma Sandwich</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/shwarma.png" alt="" />
                                                <img src="./imgs/shwarma.png" alt="" />
                                                <img src="./imgs/shwarma.png" alt="" />
                                                <img src="./imgs/shwarma.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
            <div className="sandwich-two">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ firstHead }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="sandwich-three">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ firstHead }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div></div>




  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">    <div className="sandwiches">
            <div className="sandwich-one">
                <img src="./imgs/shortbread.png" alt="" />
                <h5>{secondHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#goplah">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>



                        <div class="modal modal-xl fade first" id="goplah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Sweet Shortbread</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
            <div className="sandwich-two">
                <img src="./imgs/shortbread.png" alt="" />
                <h5>{secondHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#goplah">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>



                                <div class="modal modal-xl fade first" id="goplah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Sweet Shortbread</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
            <div className="sandwich-three">
                <img src="./imgs/shortbread.png" alt="" />
                <h5>{secondHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#goplah">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>



                                <div class="modal modal-xl fade first" id="goplah" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Sweet Shortbread</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                                <img src="./imgs/shortbread.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </div>
        </div></div>




  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">    <div className="sandwiches">
            <div className="sandwich-one">
                <img src="./imgs/salmon.png" alt="" />
                <h5>{thirdHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                        <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toots">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>




                        <div class="modal modal-xl fade first" id="toots" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Salmon Strips</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </div>
            <div className="sandwich-two">
                <img src="./imgs/salmon.png" alt="" />
                <h5>{thirdHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toots">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>




                        <div class="modal modal-xl fade first" id="toots" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Salmon Strips</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="sandwich-three">
                <img src="./imgs/salmon.png" alt="" />
                <h5>{thirdHead}</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                    <button href="" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toots">
                            <img src="./imgs/arrow.png" alt="" />
                        </button>




                        <div class="modal modal-xl fade first" id="toots" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button> 
                                <div class="modal-body">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="picc">
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <h2 className="first-one">Salmon Strips</h2>
                                            <div className="inf">
                                                <div className="one">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>5 Minutes</h4>
                                                </div>
                                                <div className="two">
                                                    <img src="./imgs/watch.png" alt="" />
                                                    <h4>6 People</h4>
                                                </div>
                                            </div>
                                                <div className="ingr">
                                                    <h3>Ingridients</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                               <div className="measurements">
                                                    <div className="olive">
                                                        <p>1/2 cup olive oil</p>
                                                        <p>1/2 cup ranch dressing</p>
                                                        <p>3 tablespoons Worcstershire sauce</p>
                                                        <p>1 tablespoon minced fresh rosemary</p>
                                                    </div>
                                                    <div className="salt">
                                                        <p>2 teaspoons salt</p>
                                                        <p>1 teaspoon lemon juice</p>
                                                        <p>1 teaspoon white vinegar</p>
                                                        <p>1/4 teaspoon ground black paper</p>
                                                    </div>
                                               </div>
                                               <div className="ingr">
                                                    <h3>Directions</h3>
                                                    <div className="dash"></div>
                                                    <div className="ball"></div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="piccs">
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                                <img src="./imgs/salmon.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="steps">
                                                <div className="step-one">
                                                    <h5>Step 1</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit  <br /> mollitia est, cupiditate cum assumenda  <br /> laborum incidunt maiores eos. Animi archi <br /> sunt similique nesciunt obcaecati eveniet <br /> voluptate, tenetur aliquid voluptates mi.</p>
                                                </div>
                                                <div className="step-two">
                                                    <h5>Step 2</h5>
                                                    <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Unde dolorem velit animi, </p>
                                                </div>
                                            </div>
                                            <div className="step">
                                                <div className="step-three">
                                                    <h5>Step 3</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Minima repellendus impedit voluptatem <br /> sint nemo blanditiis, quam eius maxime.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div></div>
</div>
        </div>
    );
}

export default TabBoot;
