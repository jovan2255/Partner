import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class EventsItem extends Component {
getStyle = () => {
    return {
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        background: this.props.event.windowClosed ?
        'blue' : 'red'
    }
}

    render() {
        const {id, title, now, windowClosed} = this.props.event;
      return(
          <div style={this.getStyle()}>
          <p>
          <input type="checkbox" onChange={this.props.markWindow.bind(this, id)} /> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delEvent.bind(this, id)} >x</button>
          <button style={btnStyle} onClick={this.props.MapComplete.bind(this, windowClosed)}>Done</button>
       <br></br>
         <div style={timelog}> Time Logged -  {now} </div>
    
   </p>
   
          </div>
      )    
    }
  }
//  PropTypes
EventsItem.propTypes = {
    event: PropTypes.object.isRequired
}
const btnStyle ={
    background:'black',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    curser: 'pointer',
    float: 'right'
}
const timelog ={
  marginTop: '15px'
}
export default EventsItem;