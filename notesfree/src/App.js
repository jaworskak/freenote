import React from 'react'
import NavBar from './Nav/NavBar'
import Footer from './Footer/Footer'
import MainSection from './MainSection/MainSection'
import './App.css'

function App() {

  return (
    <div className="App">  
        <NavBar/>
    <MainSection/>
      <Footer />
    </div>
  );
}

export default App;
