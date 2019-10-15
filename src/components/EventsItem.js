import React, { Component } from 'react';
import PropTypes from 'prop-types';


class EventsItem extends Component {
getStyle = () => {
    return {
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        background: this.props.event.windowClosed ?
        'green' : 'red'
    }
}

  render() {
    return(
        <div style={this.getStyle()}>
            <p>{this.props.event.title}</p>
        </div>
    )
    
  }
}

//  PropTypes
EventsItem.propTypes = {
    Event: PropTypes.object.isRequired
}


const itemStyle ={
    backgroundColor: '#f4f4f4'
}
export default EventsItem;