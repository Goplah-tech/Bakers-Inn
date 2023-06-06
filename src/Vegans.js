import { useState } from "react";
import image from './imgs/sandwich.png';




const Vegans = () => {

    const [tabs, setTabs] = useState([
        { img : {image}, title : 'Shawarma Sandwich', para : 'Prep Time: 20min', para : 'Serves: 60people', id:1 },
        { img : {image}, title : 'Shawarma Sandwich', para : 'Prep Time: 20min', para : 'Serves: 60people', id:2 },
        { img : {image}, title : 'Shawarma Sandwich', para : 'Prep Time: 20min', para : 'Serves: 60people', id:3 }
    ]);

    return (
        <div className="sandwch">
            {tabs.map((tab) => (
                <div className="tab-preview" key={tab.id}>
                    <img src={ image } alt="" />
                    <h4>{tab.title}</h4>
                    <p>{tab.para}</p>
                    <p>{tab.para}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Vegans;