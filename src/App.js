import React, { Component } from 'react';
import FilterableProductTable from './UIComponents/FilterableProductTable'
import HttpsRedirect from 'react-https-redirect';
//import AddToHomeScreen from '@rajatsehgal/add-to-home-screen/AddToHomeScreen';
//import load from 'little-loader';
//import Script from 'react-load-script';
//import './addtohomescreen.css';

class App extends Component {
  render() {
    
    return (
      
        <HttpsRedirect>
          <div >
            <FilterableProductTable />
          </div>
        </HttpsRedirect>
      
    );
  }
}

export default App;
