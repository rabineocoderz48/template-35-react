import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Style.css';
import './Style/Common.css';
import './Style/Responsive.css';
import './Style/Fonts.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;