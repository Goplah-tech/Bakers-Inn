import './About.scss';
import Nav from './Nav';
import Footer from './Footer'


const About = () => {
    return (
<section className="about">
            <Nav/>
            <div className="homey">
                <div className="about-overlay"></div>
                <h2>About Us</h2>
                    <div className="arrow">
                        <img src="./imgs/arrow down.png" alt="" />
                    </div>
            </div>
     <div className="container mission ">
        <div className="row">
            <div className="col-md-6">
                <div className="our-mission">
                    <img src="./imgs/our mission flag.png" alt="" />
                    <div className="text">
                        <h2>Our Mission</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur  <br />  Quidem atque eum incidunt rem itaque!</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 vision">
              <div className="our-vision">
                    <img src="./imgs/our vision eye.png" alt="" />
                    <div className="text">
                        <h2>Our Vision</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur <br /> elit. Quidem atque eum incidunt </p>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div className="values">
        <h2>Our Core Values</h2>
        <div className="first-row">
            <div className="teamwork">
                <img src="./imgs/teamwork.png" alt="" />
                <h5>Teamwork</h5>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Tempore, exercitationem <br /> architecto. Vero quod harum expedita <br /> eaque doloremque voluptate. Architecto nemo <br /> fuga debitis recusandae voluptates ullam modi <br /> dicta laboriosam eaque commodi, similique harum?</p>
            </div>
            <div className="respect">
                <img src="./imgs/respect.png" alt="" />
                <h5>Respect</h5>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Tempore, exercitationem <br /> architecto. Vero quod harum expedita <br /> eaque doloremque voluptate. Architecto nemo <br /> fuga debitis recusandae voluptates ullam modi <br /> dicta </p>
            </div>
            <div className="integrity">
                <img src="./imgs/integrity.png" alt="" />
                <h5>Integrity</h5>
                <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Tempore, exercitationem <br /> architecto. Vero quod harum expedita <br /> eaque doloremque voluptate. Architecto nemo <br /> fuga debitis </p>
            </div>
        </div>
        <div className="second-row">
            <div className="commitment">
                <img src="./imgs/commitment.png" alt="" />
                <h5>Committment</h5>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Rerum ea iusto unde <br /> vel ex quod veniam autem velit <br /> adipisci consequuntur.</p>
            </div>
            <div className="excellence">
                <img src="./imgs/excellence.png" alt="" />
                <h5>Excellence</h5>
                <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Rerum ea iusto unde <br /> vel ex quod veniam autem velit <br /> adipisci consequuntur.</p>
            </div>
        </div>
     </div>
     <div className="container promise">
        <div className="row">
            <div className="col-md-6 imagee">
                
                    <img src="./imgs/ceo.png" alt="" />
                
            </div>
            <div className="col-md-5 textt">
                
                    <h2>PROMISE OF QUALITY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas ducimus velit necessitatibus magnam? Blanditiis incidunt eum ratione unde similique quae culpa veniam velit ipsam. Nam, nisi. Aut ut ducimus at vitae, cum labore quo nihil, amet, repellat molestiae laboriosam. Quae optio temporibus possimus nesciunt maiores soluta, facere beatae totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam modi error corporis consequuntur quasi suscipit, ab tenetur officiis. Iusto, doloribus quod recusandae fuga, eligendi natus quae, adipisci facilis soluta ullam obcaecati cumque impedit officiis dolor earum explicabo rerum? Accusantium quaerat dolorem autem facilis dicta libero nisi repellendus hic fugit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit est recusandae, vero doloribus quasi ea tempore error. Voluptatum amet ipsam earum in itaque beatae, animi perferendis dignissimos eveniet ex!</p>
                    <div className="signature">
                        <h3>C.E.O:</h3>
                        <img src="./imgs/signature.png" alt="" />
                        <hr />
                    </div>
                
            </div>
        </div>
     </div>
     <Footer/>
</section>
    );
}
 
export default About;