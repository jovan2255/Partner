import React, { Component } from 'react';
import EventsItem from './EventsItem';
import PropTypes from 'prop-types';


class EventsComponent extends Component {


  render() {
    return this.props.events.map((event) =>(
       <EventsItem key={event.id} event={event} markWindow={this.props.markWindow} delEvent={this.props.delEvent}/>
    ));
  }
}

//PropTypes
EventsComponent.proptypes ={
EventsComponent: PropTypes.array.isRequired
}

export default EventsComponent;
