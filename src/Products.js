import Nav from './Nav';
import Footer from './Footer';
import Tabs from './Tabs';
import './Products.scss'




const Products = () => {
    return (

        <section className="products">
            <Nav/>
            <div className="home-page">
                <div className="products-overlay"></div>
                <h2>Our Product Range</h2>
                <img src="./imgs/arrow down.png" alt="" />
            </div>
            <div className="our-products">
                <h2>Our Products</h2>
                {/* <div className="tabs">
                    <h5>Bread</h5>
                    <h5>Meat Pies</h5>
                    <h5>Scones</h5>
                    <h5>Donuts</h5>
                </div> */}
                {/* <div className="line"></div> */}
                <div className="scroll-container">
            {/* <div className="container bread">
                
                   <div className="">
                   <div className="card first">
                        <img src="./imgs/blue bread.png" alt="" />
                        <h5>Premium Soft <br /> White Loaf</h5>
                        <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Sapiente <br /> laboriosam tempora nostrum asperiores, <br /> reprehenderit, consequatur culpa odio <br /> possimus, nisi eaque repellendus sit veniam <br /> impedit maiores suscipit deleniti ratione? <br /> Cupiditate, voluptatem.</p>
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
                
            </div> */}
            </div>
            </div>
            <Tabs/>
            <Footer/>
        </section>
    );
}
 
export default Products;