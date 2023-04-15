import './App.css';
// import Footer from './Components/Footer/Footer';
// import Hero from './Components/Hero/Hero';
// import Join from './Components/Join/Join';
// import Plans from './Components/Plans/Plans';
// import Programs from './Components/Programs/Programs';
// import Reasons from './Components/Reasons/Reasons';
import Signup from './Components/Sign/Signup';
// import Testimonials from './Components/Testimonials/Testimonials';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Login from './Components/Sign/Login';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/signup' element={<Signup/>}/>
<Route path='/login' element={<Login/>}/>
</Routes>
</BrowserRouter>
    
  );
}

export default App;
