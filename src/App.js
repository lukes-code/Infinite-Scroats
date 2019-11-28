import React from 'react';
import Goat from './components/addGoat';
import './App.css';
import Toggle from './components/toggle';
import InfiniteScroll from 'react-infinite-scroll-component';
import uuid from 'uuid';
import Header from './components/Header';

class App extends React.Component {

  state = {
    items: Array.from({ length: 5 }),
    darkMode: false,
  };

  fetchMoreData = () => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
  };

  getStyle = () => {
      return {
          background: this.state.darkMode ? 
          '#464646' : '#eee',
          transition: 'all 0.4s ease',
          color: this.state.darkMode ? 
          '#eee' : '#464646',
      }
  }

  themeToggle = () => {
    this.setState({
      darkMode: !this.state.darkMode
    })
    this.getStyle();
  }
  
  render(){

    return (
      <div 
      className="App" 
      style={this.getStyle()}
      >
        <input type="checkbox" onClick={this.themeToggle} id="switch" /><label for="switch"></label>
         <Header />
          <Toggle>
          <InfiniteScroll
            dataLength={this.state.items.length} 
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            style={this.getStyle()}
          >
            {this.state.items.map((i, index) => (
            <Goat/>
          ))}
          </InfiniteScroll>
          </Toggle>
      </div>
    );
  }
  }

export default App;
