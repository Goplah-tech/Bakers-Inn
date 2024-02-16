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
               
                <div className="scroll-container">
           
            </div>
            </div>
            <Tabs/>
            <Footer/>
        </section>
    );
}
 
export default Products;