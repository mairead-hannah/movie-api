import React, { Component } from 'react';
import Display from "../Display";
import Button from "../Button";
import styles from "./SearchBox.module.scss"

export default class SearchBox extends Component {
  state = {  
    movieTitle: "",
    movieYear: "",
    moviePlot: "",
    moviePoster: "",
    searchTitle: "",
    searchYear: ""
  }


  setTitle = (event) => {
    this.setState({searchTitle: event.target.value})
  }

  setYear = (event) => {
    this.setState({searchYear: event.target.value})
  }

  getMovies = () => {
    fetch(`http://www.omdbapi.com/?apikey=c80b77be&t=${this.state.searchTitle}&y=${this.state.searchYear}`)
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      this.setState({
        movieTitle: jsonObj.Title,
        movieYear: jsonObj.Year,
        moviePlot: jsonObj.Plot,
        moviePoster: jsonObj.Poster
        // movieData: jsonObj
      })
    })
  
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    return (
      <>
      <section className={styles.inputSection}>

        <input 
          className={styles.input}
          type="text" 
          placeholder="type a movie name" 
          onChange={this.setTitle}>
        </input>

        <input 
          className={styles.input}
          type="text" 
          placeholder="type the year (optional)" 
          onChange={this.setYear}>
        </input>
        
      </section>


      <Button 
        buttonLogic={this.getMovies} 
        buttonText="Click to get movie details"
      />

      <section className={styles.outputSection}>

        <Display 
          displayTitle={this.state.movieTitle}
          displayYear={this.state.movieYear}
          displayPlot={this.state.moviePlot}
          displayPoster={this.state.moviePoster}
        />

      </section>

      </>
    );
  }
}


//API DOCS; 
// http://www.omdbapi.com/


//API KEY:
//c80b77be
//eg: http://www.omdbapi.com/?apikey=c80b77be&t=The+Matrix&y=1999

//Api key above is associated with mairead.coyle@nology.io