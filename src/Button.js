import React from 'react';
 
class Button extends React.Component{
  // buttonClicked(){
  //   alert('You clicked on the button!')
  //   document.getElementById('header').style.color='red'
  // }
  render(){
    return <button onClick={this.props.click}>{this.props.title}</button>
  }
}

export default Button;