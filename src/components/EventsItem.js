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



  render() {
      const {id, title} = this.props.event;
    return(
        <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markWindow.bind(this, id)} /> {' '}
        {title}
        </p>

      
        </div>
    )
    
  }
}

//  PropTypes
EventsItem.propTypes = {
    event: PropTypes.object.isRequired
}

export default EventsItem;