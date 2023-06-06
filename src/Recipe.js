import { useState } from "react";


const Recipe = () => {
    const [activeTab, setActiveTab] = useState(1);
    function tabChanger(index){
        setActiveTab(index)
    }


    const head = 'Shwarma Sandwich';

    
    return (

        <div className="recipes">
        <div className="head">
            <h2>Baker's Recipes</h2>
        </div>
        <div className="taxt">
            <h5 onClick={()=>{tabChanger(1)}} className={activeTab === 1 ? 'active' :''}>For Kids</h5>
            <h5 onClick={()=>{tabChanger(2)}} className={`${activeTab === 2 ? 'active' :''}`}>For Vegans</h5>
            <h5 onClick={()=>{tabChanger(3)}} className={activeTab === 3 ? 'active' :''}>For Family</h5>
        </div>
        <div className="line"></div>
        <div className="overlays">
            <div className="over-one"></div>
            <div className="over-two"></div>
            <div className="over-three"></div>
        </div>
        <div className="sandwiches">
            <div className="sandwich-one">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ head }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                        <img src="./imgs/arrow.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="sandwich-two">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ head }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                        <img src="./imgs/arrow.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="sandwich-three">
                <img src="./imgs/shwarma.png" alt="" />
                <h5>{ head }</h5>
                <div className="para-pic">
                    <div className="para">
                        <p>Prep Time: <span>20 min</span></p>
                        <p>Serves: <span>6 people</span></p>
                    </div>
                    <div className="pic">
                        <img src="./imgs/arrow.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>

    );
}
 
export default Recipe;