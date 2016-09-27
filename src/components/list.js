import React from 'react';

export default class List extends React.Component {
  render(){
    debugger
    return(
      <div>
        <ul>{this.props.store.getState()}
        </ul>
      </div>
    )
  }
}
