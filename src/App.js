import './App.css';
import Navbar from './Components/Navbar';
// import reactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.min.css';
import Home from './Pages/Home';
// import Newarr from './Pages/Newarr';



// import Popup from './Components/Popups';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Router>
        <Routes>
        <Route path="/Newarr" element={<Newarr />} />         
          
        </Routes>
      </Router>
      <Home/>
      {/* <Popup/> */}

    </div>
  );
}

export default App;
