import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Recommended from './components/Recommended';
import Card from './components/Card';
import Query from './components/Query';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
   <div>
    <Navigation/>
   <Hero/>
   <div className="container">
   <Recommended/>
   </div>
   <div className='container'>
   <Card/>
   </div>
   <Query/>
   <div className='container-contact'>
    <Footer />
   </div>
   </div>
  )
}

export default App
