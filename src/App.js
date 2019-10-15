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



  render() {
    console.log(this.state.events)
    return (
      
      <div className="App">
      <h1>Events</h1>
   
      <EventsComponent events={this.state.events}/>
  
      </div>
    );
  }
}

export default App;
