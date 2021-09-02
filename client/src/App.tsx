import React from 'react';
import './styles/tailwind.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div className="w-screen h-auto">
      <div className="w-full sm:max-w-5xl h-full sm:mx-auto">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stats" component={Stats} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
