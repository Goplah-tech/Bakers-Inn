import './Recipes.scss';
import Nav from './Nav';
import Footer from './Footer';
import Recipe from './Recipe';


const Recipes = () => {

    const head = `The Finest of
                  Baker's Tik Tok
                  Community Recipes`;
    const text = "Make the finest croissants worthy of  Paris from your  home";
    const hash = "#Croissants #Zimbabwe #Paris #Baker's_Inn";


    return (
        <section className="recipes">
            <Nav/>
            <div className="row">
                <div className="col-md-6 first">
                  <div className="text">
                  <h2>{head}</h2>
                    <p>{text}</p>
                    <p>{hash}</p>
                    <div className="bakers">
                        <div className="image">
                        <img src="./imgs/shortbread.png" alt="" />
                        </div>
                        <div className="taxt">
                            <h5>@The_Bakers_Inn</h5>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 second">
                    <div className="pictures">
                        <div className="image-five"></div>
                        <div className="image-one">
                            <img src="./imgs/bunrecipe.png" alt="" />
                            {/* <div className="overlay"></div> */}
                        </div>
                            <div className="gif">
                                <img src="./imgs/gif.gif" alt="" />
                            </div>
                        <div className="image-two">
                            <img src="./imgs/plate.png" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-three">
                            <img src="./imgs/bunslices.png" alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className="image-four">
                            <img src="./imgs/recipes banner.png" alt="" />
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Recipe/>
            <Footer/>
        </section>
    );
}
 
export default Recipes;