import React from 'react';
import MainContextProvider from './contexts/MainContext';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Listen from './components/Listen';
import Watch from './components/Watch';
import Calendar from './components/Calendar';
import Contact from './components/Contact';

const App = props => {
  return (
    <BrowserRouter>
      <MainContextProvider>
        <div>
          <Header />
          <div className="route-container">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={About} />
              <Route path='/listen' component={Listen} />
              <Route path='/watch' component={Watch} />
              <Route path='/calendar' component={Calendar} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </MainContextProvider>
    </BrowserRouter>
  )
}

export default App;