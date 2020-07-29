import React, { Component } from 'react';
import styles from "./Display.module.scss"

export default class Display extends Component {
  state = {  }
  render() { 
    return (
      <span>
        <h2>{this.props.displayTitle}</h2>
        <p className={styles.displayYear}>{this.props.displayYear}</p>
        <p>{this.props.displayPlot}</p>
        <img src={this.props.displayPoster}></img>
      </span>
      );
  }
}