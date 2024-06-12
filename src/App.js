import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Viewstud from './components/Viewstud';
import Search from './components/Search';
import Delete from './components/Delete';



function App() {
  return (
    <div>
      <Add/>
     <Viewstud/>
     <Search/>
     <Delete/>
    </div>
  );
}

export default App;
