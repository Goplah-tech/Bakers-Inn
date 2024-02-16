import { NavLink } from "react-router-dom";


const Nav = () => {
  function activator({isActive}){
    return {
      color : isActive ? '#261B6C':''
    }
  
  }

 

    return (
       <div className="Navbar">
         {/* <NavLink to="/"><div className="App-logo">
        <img src="./imgs/bakersinnlogo.png" alt="logo" />
        </div></NavLink> */}        
          <nav class="navbar navbar-light fixed-top">
                      
                <div class="container-fluid">

                <NavLink to="/">
                    <div className="App-logo">
                    <img src="./imgs/bakersinnlogo.png" alt="logo" />
                    </div>
                </NavLink>
                
                  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                      
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <ul class="navbar-nav justify-content-centre flex-grow-1 pe-3">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="/about">About Us</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/products">Products</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/recipes">Recipes</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/kids">Kid's Corner</a>
                        </li>
                      </ul>
                        <button className="nav-bttn"><NavLink to="/contact"><span>CONTACT US</span></NavLink></button>
                    </div>
                  </div>
                </div>
                <div className="App-links">
                  <div className="row">
                    <div className="col-md-10">
                      <ul>
                      <li><NavLink style={activator} to="/about">About Us</NavLink></li>
                      <li><NavLink style={activator} to="/products"><span>Products</span></NavLink></li>
                      <li><NavLink style={activator} to="/recipes"><span>Recipes</span></NavLink></li>
                      <li><NavLink style={activator} to="/kids"><span>Kid's Corner</span></NavLink></li>
                      </ul>
                    </div>
                      <div className="col-md-2">
                      <button className="nav-bttn"><NavLink to="/contact"><span>CONTACT US</span></NavLink></button>
                      </div>
                  </div>
                </div>
      </nav>
              
          
                        


         
       </div>
    );
}
 
export default Nav;