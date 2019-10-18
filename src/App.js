import React, { Component } from 'react';
import './App.css';
import EventsComponent from './components/EventsComponent';
import AddEvent from './components/addEvent';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Agenda from './components/pages/Agenda';
import Done from './components/done';


class App extends Component {
state = {
  events: [
    {
      id:1,
      title: "Meet With Jimmy Johns",
      windowClosed: false,
      now: Date()
    },
    {
      id:2,
      title: "Meet With Chic Fil A",
      windowClosed: true,
      now: Date()
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

var count = newId.events.length + 1



  const newEvent = {
    id: count,
    title: title,
    windowClosed: true,
    now: Date()
  }

  this.setState({events:[...this.state.events, newEvent]})
}



//Map Complete
MapComplete = (windowClosed) => {
  const newMap = {events: [...this.state.events.filter(event => event.windowClosed == false)]} 
  this.setState({events: [...this.state.events.filter(event => event.windowClosed == false)]})
}


  render() {
    console.log(this.state.events)
    return (
      <Router>
      <div style={siteStyles} className="App">
      <h1>Agenda Helper</h1>
      <Header />
      
      
      <Route exact path="/" render={props=>(
        <React.Fragment>
    
    <EventsComponent events={this.state.events} markWindow={this.markWindow} delEvent={this.delEvent} MapComplete={this.MapComplete}/>
   
    <AddEvent AddEvent={this.AddEvent}/>

   </React.Fragment>
      )} />

  <Route path="/about" component={About} />
  <Route path="/Agenda" component={Agenda} />
  <Footer />
      </div>
      </Router>
    );
  }
}

const siteStyles ={
 display: 'grid',
marginTop: '5%',
marginLeft: '25%',
marginRight: '25%',
}

export default App;
