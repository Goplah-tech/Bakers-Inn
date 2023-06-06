const Factory = (props) => {

    const tittle = "Book A Factory Tour";

    return (
        
        <div className="container factory">
            <div className="top-button">
            <button onClick={props.toggle}>X</button>
            </div>
            <h2>{tittle}</h2>
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
            <div className="last-input">
                <input type="text" placeholder="Age Range of Participants"/>
            </div>
            <div className="textng">
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
            </div>
            <button>SUBMIT</button>
        </div>
    );
}
 
export default Factory;