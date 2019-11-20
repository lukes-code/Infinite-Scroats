import React, { Component } from 'react';
import uuid from 'uuid';

class Goat extends Component {

    shouldComponentUpdate(nextProps){
        return false;
    }

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
            'Craig',
            'Porkie',
            'Stinky',
            'Pete',
            'Jeff',
            'Taz',
            'Taffy',
            'Toffee',
            'Buddy',
            'Harrison',
            'Spud',
            'Phillipo',
            'Godfrey',
            'Mikey',
            'Bobby',
            'Micah',
            'Frodo',
            'Simon',
            'Dylan',
            'Shaun',
            'Sean',
            'Joey',
            'Gruff',
            'Tee',
            'Jamie',
            'Wayne',
            'Paul',
            'Goldey',
            'Lucius',
            'Lucifer',
            'Donny',
            'Clark',
            'Kent',
            'Leonard',
            'Blue',
            'Alex',
            'Steffan',
          ];

        var rand = Math.floor((Math.random() * 100) + 1);
        let randomName = arNames[Math.floor(Math.random()*arNames.length)];

        return(
            
            <div 
            className="GoatItem" 
            onScroll={this.handleScroll}
            >
                <img className="GoatImg" src={ "/images/goats/" + rand + ".jpg" } alt="goat"/>
                <div className="GoatContent">
                    <p>Name: {randomName}</p>
                </div>
            </div>
        );
    }
}

export default Goat;
