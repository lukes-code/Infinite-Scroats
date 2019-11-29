import React, { Component } from 'react';

class Theme extends Component {
  
    render() {
      return(
        <React.Fragment>
            <input type="checkbox" onClick={this.props.theme} id="switch"/>
            <label for="switch"></label>
        </React.Fragment>
      );
    }
}

export default Theme;