import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import BasicMortgage from './components/BasicMortgage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/basic-mortgage" element={<BasicMortgage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
