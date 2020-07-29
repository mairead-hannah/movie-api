import React, { Component } from 'react';
import SearchBox from "./components/SearchBox"
import styles from "./App.module.scss"

export default class App extends Component {
  state = {  }
  render() { 
    return (
    <main className={styles.main}>
      <h2 className={styles.mainTitle}>Search for a movie here!</h2>
      <SearchBox/>
    </main>
    );
  }
}



//API DOCS; 
// http://www.omdbapi.com/


//API KEY:
//c80b77be
//http://www.omdbapi.com/?i=tt3896198&apikey=c80b77be

//Api key above is associated with mairead.coyle@nology.io