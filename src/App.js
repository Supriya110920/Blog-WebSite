//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import {Box} from '@material-ui/core';


function App() {
  return (
    <React.Fragment>
        <Header />
        <Box style={{marginTop: 64}}>
          <Home />
        </Box>
         
    </React.Fragment>
    


  );
}

export default App;
