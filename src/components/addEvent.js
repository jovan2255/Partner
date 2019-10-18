import React, { Component } from 'react'

class AddEvent extends Component {
state = {
title: ''
}

onSubmit =(e) => {
    e.preventDefault();
    this.props.AddEvent(this.state.title);
    this.setState({ title: '' });
}
onChange =(e) => this.setState({[e.target.name]: e.target.value});

    render() {
        return (
            <div>
    <form style={FormStyle} onSubmit={this.onSubmit} >
        <input type = "text" name="title" placeholder="Add Event" style={EventStyle}  value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Add Event"  className="btn" style={{flex:1}} />  
    </form>  
      </div>
      )
    }
}

const EventStyle={
    fontSize: '30px',
    flex: '10'

}

const FormStyle ={
    display: 'flex',
    border: 'none',
    curser: 'pointer',
    fontSize: '24px',  
    marginTop: '5%'
    
}
export default AddEvent
