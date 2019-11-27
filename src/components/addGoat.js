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
            'Born in hell, this goat is not to be reckoned with.','One of 16 siblings, this goat craves attention.',
            'This French animal loves baguettes... and anything else edible actually.',
            'Believe it or not, this young goat spawned in the land of Sweden.',
            'Some say they have seen this goat kill, just saying.',
            'As spanish as paella this goat does not understand English, or Spanish actually.',
            'This goat claims to have come up with the idea for Uber.','This full time smoking goat has time for nobody.',
            'Full time goat, part time comedian at the Comedy club on the farm.',
            'This English goat loves sausage and mash.',
            'Although convinced he is a sheep, this stud is infact a goat.',
            'Ever since this goat was a young boy he dreamed the stardom of Billy Goats Gruff.',
            'Five time international head butt champion.',
            'The origin of this goat is unknown, sadly he does not speak much English.',
            'Sponsored by Subway, it is rumouored around the local farm that this goat is faster than Bolt!',
            'This Scottish goat lived with his family of 5, before trading them in for a ham sandwich.',
            'Born into the royal family, this goat believes he will one day be the King of England.',
            'Shipped to Canada from South America at birth, he truly belives that he is Canadian.',
            'This headbutter, is 2nd cousins with Billy Goats Gruff.',
            'Although this goat was born in Japan, he identifies as an American.',
            'Born into the local goat orphanage, he has never known of his true parents.',
            'Welsh through and through, claims to be related to dragons.',
            'We do not actually know where this spawn came from, mysterious.',
            'This goat was born with great eyesight, until he found a love for RGB lighting.',
            'Most people associate Australian animals as fierce and dangerous, not this one.',
            'This goat was born in China but according to our sources he does not speak Chinese (or any other language).',
            'Founder of the saying G.O.A.T (greatest of all time) this goat has had swag since birth.',
            'Born just outside of Silicon Valley, this goat has the nickname of Pied Piper',
            'Born in flames, those closest to him claim that he has never blinked.',
            'A lover of jacket potatos, this animal originates from Bulgaria.',
            'This goat is originally from Scotland, before he wandered down to England.',
        ];

        const arStoryMid = [
            'Once tipped off as the next big thing in Winter Sports.',
            'The country people believe that this goat can backflip on command.',
            'Serial eater of buttered baguettes.',
            'According to his LinkedIn, he has been unemployed his entire life.',
            'Has several hundred friends on GoatBook (kind of a big deal).',
            'We are legally obligated to tell you that this goat has served time.',
            'Will fight anyone and I mean anyone, for a fresh patch of grass.',
            'Once upon a time this fella headbutt something so hard, he thought he was a duck for a few days.',
            'Owner of an Apple Mac, Apple iPhone and will fight you if you bad mouth Apple.',
            'No amount of love and attention will bring this goat back from the darkside.',
            'Banned from public view as children have reported him stealing their ball.',
            'Lover of all things grassy, pretty boring guy to be honest.',
            'Future "Hall of Farmer" due to his notorious presence.',
            'This geezer does not really do anything, just a typical goat.',
            'He has been under surveillance since 2013, due to an internation cyber attack.',
            'He has painted several pieces that have sold for millions, I doubt that he understands but his owners appreciate it.',
            'After running for President in the goat world for the 11th time, he has been announced as local Mayor out of sympothy.',
            'Full-time blogger, this fella just can not let the Tumblr days go.',
            'Ever since we have known this goat, it is obvious he wants to one day be a sponsored Skateboarder.',
            'Despite his good looks and popularity in the goat community, he strongly believes that he is infact an Alpaca.',
            'He is not happy about us using this picture to represent him, he has told us his "Gains" are far better now.'
        ];

        const arStoryEnd = [
            'This boy has had several medicals and all doctors believe that he will live forever.',
            'Has been warned on numerous occasions that he must stop eating double cheese pizzas before his heart gives out.',
            'Since taking this photo, he has dyed his hair green. Do not ask us why.',
            'Has publically announced that he will devote the rest of his life to eating grass.',
            'Sadly he is no longer with us. No literally, he moved to America somewhere.',
            'He paid thousands of pounds for this photo shoot, we have no idea where he got the money from.',
            'Has been told he must pay child support but continues to ignore our calls.',
            'One of our personal favourites, I mean just look at him.',
            'If you see this goat in an area near you please call us as his mother is worried sick.',
            'Has just asked us what a scrote is, this is awkward.',
            'Sadly, he is currently in intensive care as his most recent stunt did not go according to plan.',
            'At his present time, he and his spouse have just delivered their 37th baby.',
            'Unfortunately, this guy did not know he was allergic to avocado until it was too late (one hipster down).'
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
                    <p>{randomName}</p>
                    <div className="GoatStory">
                        <p>{randomStory}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goat;
