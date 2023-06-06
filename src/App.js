import './App.scss';
import Home from './Home';
import About from './About';
import Products from './Products';
import Kids from './Kids';
import Recipes from './Recipes';
import Contact from './Contact';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/kids' element={<Kids/>} />
      <Route path='/recipes' element={<Recipes/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  )
}

export default App;
