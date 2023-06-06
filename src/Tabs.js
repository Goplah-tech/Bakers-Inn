import { useState } from "react";
import './index.css';



const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="container">
            <div className="block-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs" }
                onClick={()=>toggleTab(1)}
                >For Kids</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs" }
                onClick={()=>toggleTab(2)}
                >For Vegans</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs" }
                onClick={()=>toggleTab(3)}
                >For Family</div>
            </div>

            <div className="content-tabs">
            <div className="content active-content">
               <div className="picz">
               <img src="./imgs/shwarma.png" alt="" />
               </div>
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

            <div className="content">
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

            <div className="content">
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
 
export default Tabs;