import React, { Component } from 'react';
import SearchBox from "./components/SearchBox"

export default class App extends Component {
  state = {  }
  render() { 
    return (
    <>
    <p>App.jsx is working</p>
    <SearchBox/>
    </>
    );
  }
}



//API DOCS; 
// http://www.omdbapi.com/


//API KEY:
//c80b77be
//http://www.omdbapi.com/?i=tt3896198&apikey=c80b77be

//Api key above is associated with mairead.coyle@nology.io