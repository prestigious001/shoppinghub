import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.min.css';
import Home from './Pages/Home';
// import Popup from './Components/Popups';

function App() {
  return (
    <div >
      <Navbar />
      <Router>
        <Routes>
        {/* <Route path="/" element={<Home />} />          */}
          
        </Routes>
      </Router>
      <Home/>
      {/* <Popup/> */}

    </div>
  );
}

export default App;
