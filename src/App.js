
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Details from './pages/details';
import Cart from './pages/cart';

function App() {
  return (
    <div>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details-item/:id' element={<Details/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
