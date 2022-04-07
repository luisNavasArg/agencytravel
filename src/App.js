import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./componentes/Home"
import Hoteles from "./componentes/Hoteles"
import Paquetes from "./componentes/Paquetes"
import Nav from './componentes/Nav'


function App() {
  
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/hoteles" element={<Hoteles />} > </Route>
          <Route path="/paquetes" element={<Paquetes />} > </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
