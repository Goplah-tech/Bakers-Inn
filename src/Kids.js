import Nav from './Nav';
import Footer from './Footer';
import './Kids.scss'



const Kids = () => {
    return (
        <section className="kids">
        <Nav/>
        <div className="homee">
            <div className="text">
                <h1>Kid's <br /> Corner</h1>
            </div>
            <div className="picture">
                <img src="./imgs/kids group.png" alt="" />
            </div>
        </div>
        <div className="maze">
            <div className="texting">
                <h2>Spaceship Maze</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet maxime labore beatae eum nisi ratione velit fugit provident expedita, dolores, enim atque id reiciendis consequatur dolore? Aut, perspiciatis nesciunt?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus omnis rem ipsum nostrum eius quibusdam consequuntur. Dolorum minima quibusdam tempora.</p>
                <button>PLAY GAME</button>
            </div>
            <div className="imag">
                <img src="./imgs/maze.png" alt="" />
            </div>
        </div>
        <div className="risky">
            <div className="texting">
                <h2>Risky Way</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error itaque pariatur cum, consequatur perspiciatis sunt animi amet quasi ipsum ut impedit sequi? Veniam incidunt, nesciunt quas aut ducimus ratione consequatur ipsa aliquam laboriosam? Non nobis dicta itaque, est ipsam repellat velit molestiae amet expedita quidem consequatur animi illo consectetur?</p>
                <button>PLAY GAME</button>
            </div>
            <div className="imag">
                <img src="./imgs/cubes.png" alt="" />
            </div>
        </div>
        <div className="pacman">
            <div className="texting">
                <h2>Pacman</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis error itaque pariatur cum, consequatur perspiciatis sunt animi amet quasi ipsum ut impedit sequi? Veniam incidunt, nesciunt quas aut ducimus ratione consequatur ipsa aliquam laboriosam? Non nobis dicta itaque, est ipsam repellat velit molestiae amet expedita quidem consequatur animi illo consectetur?</p>
                <button>PLAY GAME</button>
            </div>
            <div className="imag">
                <img src="./imgs/pacman.png" alt="" />
            </div>
        </div>
        <Footer/>
        </section>
    );
}
 
export default Kids;