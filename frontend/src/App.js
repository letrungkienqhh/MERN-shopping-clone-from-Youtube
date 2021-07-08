import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {useState} from 'react'
import HomeScreen from './Screen/HomeScreen'
import ProductScreen from './Screen/ProductScreen'
import CartScreen from './Screen/CartScreen'


//Componnents
import NavBar from './components/NavBar';
import BackDrop from './components/BackDrop'
import SideDrawer from './components/SideDrawer';
import { Provider } from 'react-redux';

function App() {
  const [sideToggle,setSideToggle]= useState(false)
  return (
   
        <Router>
   
          <NavBar click={()=>{setSideToggle(true)}}></NavBar>
          <SideDrawer show={sideToggle} click={()=>{setSideToggle(false)}}></SideDrawer>

          <BackDrop show={sideToggle} click={()=>setSideToggle(false)}></BackDrop>
          <main className="app">
            <Switch>
              
              <Route exact path="/"><HomeScreen></HomeScreen></Route>
              <Route exact path="/products/:id"><ProductScreen/></Route>
              <Route exact path="/cart"><CartScreen></CartScreen></Route>
              <Route exact path="/about"><About></About></Route>
            </Switch>
          </main>
        </Router>
   
  
  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
export default App;
