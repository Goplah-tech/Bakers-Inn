

const Tab = () => {

            const head = 'GOPLAH';


    return (
        <>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
        </>
    );
}
 
export default Tab;