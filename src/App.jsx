import './styles/Style.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sauces from './pages/Sauces';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
       {/* <Route path="/sauces" element={<Sauces />}/> */}
        </Route>
      </Routes>
      <Footer />
      </Router>
    
    </div>
  )
}

export default App;
