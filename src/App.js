import './App.css';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/pages/home/Home';

function App() {
  return (
    <div >
      <Navbar>
        <Home/>
      </Navbar>
    </div>
  );
}

export default App;
