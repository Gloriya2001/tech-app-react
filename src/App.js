import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Viewstud from './components/Viewstud';
import Search from './components/Search';
import Delete from './components/Delete';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar/>
      <Add/>
     <Viewstud/>
     <Search/>
     <Delete/>
    </div>
  );
}

export default App;
