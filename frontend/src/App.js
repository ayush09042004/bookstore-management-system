// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import Login from './pages/login.jsx';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Cart from './pages/Cart';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/login" element={<Login />} />   {/* Added login route */}
        <Route path="/signup" element={<Signup />} /> {/* Added signup route */}
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
