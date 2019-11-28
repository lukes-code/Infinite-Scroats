import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  
    render() {
      return(
        <header 
        className="App-header">
          <p>
            Infinite Scrolling Goats
            <span 
            className="small-text" 
            style={this.props.getStyle}
            >
              (Not Infinite Scrotes, sorry)
            </span>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          </header>
      );
    }
  }

export default Header;