import React from 'react';
import logo from './logo.svg';
import Goat from './components/addGoat';
import './App.css';
import Toggle from './components/toggle';
import InfiniteScroll from 'react-infinite-scroll-component';
import uuid from 'uuid';

class App extends React.Component {

  state = {
    items: Array.from({ length: 5 }),
  };

  fetchMoreData = () => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
  };
  
  render(){


    return (
      <div className="App">
        <header className="App-header">
          <p>
            Infinite Scrolling Goats
            <span className="small-text">
              (Not Infinite Scrotes, sorry)
            </span>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Toggle>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
            <Goat key={uuid.v4()}/>
          ))}
          </InfiniteScroll>
            {/* <Goat />
            <Goat />
            <Goat />
            <Goat />
            <Goat /> */}
          </Toggle>
      </div>
    );
  }
  }

export default App;
