import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Viewstud from './components/Viewstud';
import Search from './components/Search';
import Delete from './components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Add />} />
          <Route path='/search' element={<Search />} />
          <Route path='/delete' element={<Delete />} />
          <Route path='/view' element={<Viewstud />} />


        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
