import React, { Component } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import AddEvent from './components/addEvent';

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

//Toggle Window Open/closed
markWindow = (id) => {
  this.setState({ events: this.state.events.map(event => {
    if(event.id === id){
      event.windowClosed = !event.windowClosed
    }
    return event;
  })});
}
//Delete Event
delEvent = (id) => {
  this.setState({events: [...this.state.events.filter(event => event.id !== id)]})
}




//Add Event
AddEvent =(title) => {
 
const newId= {events:[...this.state.events]}

var count = newId.events.length +1



  const newEvent = {
    id: count,
    title: title,
    windowClosed: true
  }

  this.setState({events:[...this.state.events, newEvent]})
}

  render() {
    console.log(this.state.events)
    return (
      <div className="App">
      <h1>Events</h1>
      <AddEvent AddEvent={this.AddEvent}/>
      <EventsComponent events={this.state.events} markWindow={this.markWindow} delEvent={this.delEvent}/>
   
      </div>
    );
  }
}

export default App;
