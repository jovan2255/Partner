import React, { Component } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';


class App extends Component {
state = {
  events: [
    {
      id:1,
      title: "Meet With Jimmy Johns",
      windowClosed: false
    },
    {
      id:2,
      title: "Meet With Chic Fil A",
      windowClosed: true
    }

  ]
}

markWindow = (id) => {
  this.setState({ events: this.state.events.map(event => {
    if(event.id === id){
      event.windowClosed = !event.windowClosed
    }
    return event;
  })});
}


  render() {
    console.log(this.state.events)
    return (
      
      <div className="App">
      <h1>Events</h1>
   
      <EventsComponent events={this.state.events} markWindow={this.markWindow}/>
  
      </div>
    );
  }
}

export default App;
