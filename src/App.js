import React from 'react';
import Details from './Details';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import India from './India/India';
import About from './About/About';
import Menu from './Menu';
import Footer from './Footer/Footer'

function Home() {
  return <Details />
}
function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/about" component={About} />
            </Switch>
            <Footer />
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
