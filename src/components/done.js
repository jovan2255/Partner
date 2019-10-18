import React, { Component } from 'react'

export class Done extends Component {


          
          

    render() {
        const {windowClosed} = this.props.event;
   
        return (
            <div>
        <button  onClick={this.props.MapComplete.bind(this, windowClosed)}>Done</button>
        </div>
      )
    }
}

export default Done
