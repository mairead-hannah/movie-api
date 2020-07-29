import React, { Component } from 'react';
import styles from "./Button.module.scss"

export default class Button extends Component {
  state = {  }
  render() { 
    return (  
      <>
      <button 
        className={styles.button}
        onClick={this.props.buttonLogic}>{this.props.buttonText}</button>
      </>
    );
  }
}
