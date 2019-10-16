import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class EventsItem extends Component {
getStyle = () => {
    return {
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        background: this.props.event.windowClosed ?
        'green' : 'red'
    }
}
handleChange() {
    this.setState({title: "tese `       "})
    }
    handleSubmit() {
        alert('A name was submitted: ' )
    }
    

    render() {
        const {id, title} = this.props.event;
      return(
          <div style={this.getStyle()}>
          <p>
          <input type="checkbox" onChange={this.props.markWindow.bind(this, id)} /> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.delEvent.bind(this, id)} style={btnStyle}>x</button>
   
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
export default EventsItem;