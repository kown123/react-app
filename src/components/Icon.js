import React, {Component} from 'react';

class Icon extends Component{
    render(){
      return (
        <span className={"ico-"+this.props.type+this.props.num}></span>
      );
    }
}
  
  export default Icon;