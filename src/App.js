import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import BasicMortgage from './pages/BasicMortgage/BasicMortgage';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/basic-mortgage" element={<BasicMortgage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
