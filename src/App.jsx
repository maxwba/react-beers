import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider, Box } from '@chakra-ui/core';
import { Home } from './components/Home';
import { AllBeers } from './components/AllBeers';
import { RandomBeers } from './components/RandomBeers';
import { NewBeer } from './components/NewBeer';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Box>
            <Route exact path="/" component={Home} />
            <Route exact path="/allbeers" component={AllBeers} />
            <Route component={RandomBeers} />
          </Box>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
