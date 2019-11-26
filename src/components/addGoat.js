import React, { Component } from 'react';

class Goat extends Component {

    state = {
        usedFirstNames: [],
      };

    shouldComponentUpdate(nextProps){
        return false;
    }

    render(){

        const arFirstNames = [
            'Napoleon','Albert','Phil','George','Graham','Bertie','Dexter','Frankie','Tommy','Kyle','Jacko','Freddy','Jezza','Craig','Porkie',
            'Stinky','Pete','Jeff','Taz','Taffy','Toffee','Buddy','Harrison','Spud','Phillipo','Godfrey','Mikey','Bobby','Micah','Frodo',
            'Simon','Dylan','Shaun','Sean','Joey','Gruff','Tee','Jamie','Wayne','Paul','Goldey','Lucius','Lucifer','Donny','Clark','Kent',
            'Leonard','Blue','Alex','Steffan',
            ];

        const arLastNames = [
        'Jones','Da Goat','Williams','the Third','Phillips','Lewis','Maxwell','Franklin','Peters','Peterson','Johnson','Big Boy',
        'The Porker','Parker','Kent','Gruff','Mountain','Jeffers','Smith','Gregory','Good Boy','Brians','Walliams','Gretzka',
        'James','Son of Satan','Bowen','Richards','Richardson','Baker','Rye','Kelly','Porker','Obama','Rodriguez','Bale',
        'Haye','Trouble','Crasher','Smasher','Flash','Slug','Graham','Cates','Boy','Simo','Leonardo','Alexis','Peters','Gregg',
        ];

        const arStoryStart = [
            // Temporary information, replace with actual content
            'Born in hell, this goat is not to be reckoned with.','One of 16 siblings, this goat craves attention.',
            'This French animal loves baguettes... and anything else edible actually.','Believe it or not, this young goat spawned in the land of Sweden.','Some say they have seen this goat kill, just saying.','As spanish as paella this goat does not understand English, or Spanish actually.','This goat claims to have come up with the idea for Uber.','This full time smoking goat has time for nobody.','Full time goat, part time comedian at the Comedy club on the farm.','This English goat loves sausage and mash.','Although convinced he is a sheep, this stud is infact a goat','Ever since this goat was a young boy he dreamed the stardom of Billy Goats Gruff.','Five time international head butt champion.','The origin of this goat is unknown, sadly he does not speak much English.','Sponsored by Subway, it is rumouored around the local farm that this goat is faster than Bolt!','This Scottish goat lived with his family of 5, before trading them in for a ham sandwich.','Born into the royal family, this goat believes he will one day be the King of England'
        ];

        const arStoryMid = [
            // Temporary information, replace with actual content
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.','sed do eiusmod tempor incididunt ut labore.',
            'et dolore magna aliqua. Etiam sit amet nisl purus in','Turpis egestas sed tempus urna et pharetra.',
        ];

        const arStoryEnd = [
            // Temporary information, replace with actual content
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.','sed do eiusmod tempor incididunt ut labore.',
            'et dolore magna aliqua. Etiam sit amet nisl purus in','Turpis egestas sed tempus urna et pharetra.',
        ];

        var rand = Math.floor((Math.random() * 100) + 1);
        var newFirstName = this.state.usedFirstNames.slice();
        let firstName = [];

        do{
            firstName = arFirstNames[Math.floor(Math.random()*arFirstNames.length)];
            this.setState({ usedFirstNames: [...this.state.usedFirstNames, firstName] })
        } while(this.state.usedFirstNames.includes(newFirstName));
        // Fix this buy passing props to app js rather than setting state in this component

        let lastName = arLastNames[Math.floor(Math.random()*arLastNames.length)];
        let randomStory = arStoryStart[Math.floor(Math.random()*arStoryStart.length)] + ' ' + arStoryMid[Math.floor(Math.random()*arStoryMid.length)] + ' ' + arStoryEnd[Math.floor(Math.random()*arStoryEnd.length)];

        //Add check here to see if firstName and/or last name has existing in the previous iterations
        //array.includes array.shift array.push

        let randomName = firstName + ' ' + lastName;

        return(
            
            <div 
            className="GoatItem"
            id="Goats"
            onScroll={this.handleScroll}
            >
                <img className="GoatImg" src={ "/images/goats/" + rand + ".jpg" } alt="goat"/>
                <div className="GoatContent">
                    <p>Name: {randomName}</p>
                    <div className="GoatStory">
                        <p>{randomStory}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goat;
