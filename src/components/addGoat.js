import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Goat extends Component {

    render(){

        const arNames = [
            'Napoleon',
            'Albert',
            'Phil',
            'George',
            'Graham',
            'Bertie',
            'Dexter',
            'Frankie',
            'Tommy',
            'Kyle',
            'Jacko',
            'Freddy',
            'Jezza',
            'Stepho',
          ];

        var rand = Math.floor((Math.random() * 5) + 1);
        let randomName = arNames[Math.floor(Math.random()*arNames.length)];

        return(
            <div className="GoatItem">
                <img className="GoatImg" src={ "/images/goats/" + rand + ".jpg" }/>
                <div className="GoatContent">
                    <p>Name: {randomName}</p>
                </div>
            </div>
        );
    }
}

export default Goat;
