import React, { Component } from 'react'

export class AddEvent extends Component {
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
    <form onSubmit={this.onSubmit}  style={{display:'flex'}} >
        <input type = "text" name="title" placeholder="Add Event" style={{flex:'10'}}  value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Add Event"  className="btn" style={{flex:1}} />  
    </form>
        )
    }
}
export default AddEvent