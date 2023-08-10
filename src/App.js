import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';
import FatchData from './components/FatchData';
import Signup from './pages/Signup';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
    <Router>
    <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/business' element={<FatchData cat="business" />} />
        <Route exact path='/technology' element={<FatchData cat="technology" />} />
        <Route exact path='/sports' element={<FatchData cat="sports" />} />
        <Route exact path='/politics' element={<FatchData cat="politics" />} />
        <Route exact path='/health' element={<FatchData cat="health" />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

