





    function Tabs() {
       return(


    <>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Bread</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#meat" type="button" role="tab" aria-controls="profile" aria-selected="false">Meat Pies</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#scones" type="button" role="tab" aria-controls="contact" aria-selected="false">Scones</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#donuts" type="button" role="tab" aria-controls="contact" aria-selected="false">Donuts</button>
            </li>
        </ul>




        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> <div className="our-products">
                
                <div className="scroll-container">
            <div className="container bread">
                
                   <div className="">
                   <div className="card first">
                        <img src="./imgs/blue bread.png" alt="" />
                        <h5>Premium Soft <br /> White Loaf</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laboriosam tempora nostrum asperiores, reprehenderit, consequatur culpa odio possimus, nisi eaque repellendus sit veniam impedit maiores suscipit deleniti ratione? Cupiditate, voluptatem.</p>
                    </div>
                   </div>
                    <div className="">
                       <div className="card seconds">
                       <img src="./imgs/yellow bread.png" alt="" />
                        <h5>Family Loaf High <br /> Enenrgy Brown</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
                       </div>
                    </div>
                    <div className="">
                        <div className="card third">
                        <img src="./imgs/red bread.png" alt="" />
                        <h5>Family Loaf <br /> Soft White</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="card fourth">
                        <img src="./imgs/high energy brown.png" alt="" />
                        <h5>Premium Soft <br /> White Loaf</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="card third">
                        <img src="./imgs/red bread.png" alt="" />
                        <h5>Family Loaf <br /> Soft White</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="card fourth">
                        <img src="./imgs/high energy brown.png" alt="" />
                        <h5>Premium Soft <br /> White Loaf</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
                        </div>
                    </div>
                
            </div>
            </div>
            </div>
            </div>




            <div class="tab-pane fade" id="meat" role="tabpanel" aria-labelledby="profile-tab">
               <div className="container meat">
                    <div className="cards">
                        <div className="card first-card">
                            <img src="./imgs/pie copy.png" alt="" />
                            <h5>Lorem ipsum dolor <br /> sit amet.</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card second-card">
                            <img src="./imgs/pie copy.png" alt="" />
                            <h5>Lorem ipsum dolor <br /> sit amet.</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card third-card">
                            <img src="./imgs/pie copy.png" alt="" />
                            <h5>Lorem ipsum dolor <br /> sit amet.</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                    </div>
               </div>
            </div> 




            <div class="tab-pane fade" id="scones" role="tabpanel" aria-labelledby="contact-tab">
                <div className="container scones">
                    <div className="cards">
                        <div className="card first-card">
                            <img src="./imgs/scone.png" alt="" />
                            <h5>Sugar Free Scone</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card second-card">
                            <img src="./imgs/scone.png" alt="" />
                            <h5>Sugar Free Scone</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card third-card">
                            <img src="./imgs/scone.png" alt="" />
                            <h5>Sugar Free Scone</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                    </div>
                </div>
            </div>





            <div class="tab-pane fade" id="donuts" role="tabpanel" aria-labelledby="contact-tab">
               <div className="container donuts">
                    <div className="cards">
                        <div className="card first-card">
                            <img src="./imgs/cream donut.png" alt="" />
                            <h5>Chocolate Donut</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card second-card">
                            <img src="./imgs/donut.png" alt="" />
                            <h5>Chocolate Donut</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                        <div className="card third-card">
                            <img src="./imgs/cream donut.png" alt="" />
                            <h5>Chocolate Donut</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis rem quam doloremque distinctio nihil aspernatur! Tempora molestias eius enim ipsum, dolore amet. Cupiditate, et omnis!</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </>


       )
        
    };

 
export default Tabs;