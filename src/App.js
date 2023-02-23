
import './App.css';
import { BrowserRouter,  Routes,  Route } from "react-router-dom"
import Header from './components/Header/Header';
import Signup from './components/Registration/Signup';
import Login from './components/Registration/Login';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services'
import Admin from './components/Pages/Admin';
import Career from './components/Pages/Career';
import Update from './components/Pages/Update';


function App() {
 
  return (
    
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>    
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/login' element={<Login/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
