import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Timer from './Components/Timer';
import NonVerbal from './Components/NonVerbal';
import Verbal from './Components/Verbal';
import English from './Components/English';
import Math from './Components/Math';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="conatiner my-3">
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="/maths">
              <Math/>
            </Route>
            <Route path="/english">
              <English/>
            </Route>
            
            <Route path="/verbal">
              <Verbal/>
            </Route>
            <Route path="/nonverbal">
              <NonVerbal/>
            </Route>
            <Route path="/timer">
              <Timer/>
            </Route>
            <Route path="/home">
              <Carousel/>
              <Footer/>
            </Route>
          </Switch>
      </div>
      </Router>

    </div>
  );
}

export default App;
