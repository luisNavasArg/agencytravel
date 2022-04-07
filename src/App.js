import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//Importo la libreria del dom
import Home from './componentes/Home';
import Hoteles from './componentes/Hoteles';
import Paquetes from './componentes/Paquetes';
import Nav from './componentes/Nav'
import React, { Component } from 'react';
import axios from 'axios' //Aca se puede llamar como quiera, pero SIEMPRE IGUAL a como lo llame desp

class App extends Component {
  // const[loading,setLoading] = useState('')
  constructor(props){
      super(props)
      this.state ={
          hoteles:[],
          paquetes:[]
      }
  }
  async request(){
      await axios('https://pruebagcd.herokuapp.com/paquetes')
      .then(res=>this.setState({
        paquetes:res.data
      }))
  }
componentDidMount(){
    this.request()
  }
  render (){
    
      return(
      <div className="App">
          <Router>
          <Nav/>
          <Routes>
              <Route path="/" element={<Home/>}>
                  
              </Route>
              <Route path="/hoteles" element={ <Hoteles/>}>
                 
              </Route>
              <Route path="/paquetes" element={<Paquetes data={this.state.paquetes}/>}>
                  
              </Route>
          </Routes>
          </Router>
      </div>
      )
  }
}

export default App;
  
