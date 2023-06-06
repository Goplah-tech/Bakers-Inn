import { NavLink } from "react-router-dom";


const Nav = () => {
  function activator({isActive}){
    return {
      color : isActive ? '#261B6C':''
    }
  
  }

    return (
       <div className="Navbar">
         <NavLink to="/"><div className="App-logo">
        <img src="./imgs/bakersinnlogo.png" alt="logo" />
        </div></NavLink>
        
         <div className="App-links">
         <ul>
          <li><NavLink style={activator} to="/about">About Us</NavLink></li>
          <li><NavLink style={activator} to="/products"><span>Products</span></NavLink></li>
          <li><NavLink style={activator} to="/recipes"><span>Recipes</span></NavLink></li>
          <li><NavLink style={activator} to="/kids"><span>Kid's Corner</span></NavLink></li>
         </ul>
         <button><NavLink to="/contact"><span>CONTACT US</span></NavLink></button>
         </div>
         
        
       </div>
    );
}
 
export default Nav;