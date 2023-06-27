import './Recipes.scss';
import Nav from './Nav';
import Footer from './Footer';
import TabBoot from './TabBoot';
import { useRef, useState, useEffect } from 'react';



const Recipes = () => {
    const current = useRef(1)
    const [love, setLove] = useState(current.current)
    useEffect(() => {
        let interval = setInterval(()=>{
            setLove(old=>{

                if(old>=4){
                    old = 1
                }else{
                    old += 1
                }
                return old;
            })
        }, 2_000)
        return (() => {
            clearInterval(interval)
        });
    });



    const head = `The Finest of
                  Baker's Tik Tok
                  Community Recipes`;
    let text = "Make the finest croissants worthy of  Paris from your  home";
    let hash = "#Croissants #Zimbabwe #Paris #Baker's_Inn";

    if (love == 1) {
        text = "Make the finest croissants worthy of  Paris from your  home";
        hash = "#Croissants #Zimbabwe #Paris #Baker's_Inn"
    }else if(love == 2){
        text = "Goplah";
        hash = "Stim"
    }else if(love == 3){
        text = "Lovemore";
        hash = "Mupini"
    }else if(love == 4){
        text = "Vamupini";
        hash = "Stimela"
    }
    return (
        <section className="recipes">
            <Nav/>
          <div className="receipes">
          <div className="row">
                <div className="col-md-6 first">
                  <div className="text">
                  <h2>{head}</h2>
                    <p>{text}</p>
                    <p>{hash}</p>
                    <div className="bakers">
                        <div className="imagi">
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
                     <div className="row">
                        <div className="col-md-6">
                            <div className="first-img">
                                    <div className="image-onee">
                                        <img src="./imgs/bunrecipe.png" alt="" />
                                        <div className={`overlay ${love === 1 ? "hidden" : "show" }`}></div>
                                        <div className={`gif ${love === 1 ? "show" : "hidden"}`}>
                                        <img src="./imgs/gif.gif" alt="" />
                                    </div>
                                    </div>
                                    
                            </div>
                        </div>
                            <div className="col-md-6">
                                <div className="second-img">
                                    <div className="image-twoo">
                                        <img src="./imgs/plate.png" alt="" />
                                        <div className={`overlay ${love === 2 ? "hidden" : "show" }`}></div>
                                        <div className={`gif ${love === 2 ? "show" : "hidden"}`}>
                                        <img src="./imgs/gif.gif" alt="" />
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                     </div>
                       <div className="row">
                            <div className="col-md-6">
                                <div className="third-img">
                                        <div className="image-thre">
                                            <img src="./imgs/bunslices.png" alt="" />
                                            <div className={`overlay ${love === 3 ? "hidden" : "show" }`}></div>
                                            <div className={`gif ${love === 3 ? "show" : "hidden"}`}>
                                            <img src="./imgs/gif.gif" alt="" />
                                        </div>
                                        </div>
                                        
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <div className="fourth-img">
                                        <div className="image-fourr">
                                            <img src="./imgs/recipes banner.png" alt="" />
                                            <div className={`overlay ${love === 4 ? "hidden" : "show" }`}></div>
                                            <div className={`gif ${love === 4 ? "show" : "hidden"}`}>
                                            <img src="./imgs/gif.gif" alt="" />
                                        </div>
                                        </div>
                                       
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
          </div>
            <TabBoot/>
            <Footer/>
        </section>
    );
}
 
export default Recipes;