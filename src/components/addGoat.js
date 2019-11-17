import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Goat extends Component {

    render(){

        var rand = Math.floor((Math.random() * 5) + 1);

        return(
            <div className="GoatItem">
                <img className="GoatImg" src={ "/images/goats/" + rand + ".jpg" }/>
               <h1>issa goat</h1>
            </div>
        );
    }
}

export default Goat;
