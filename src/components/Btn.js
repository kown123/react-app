import React, {Component} from 'react';
import { btnAction } from "../js/newBundle";//btn motion

class Btn extends Component{
    render(){
      return (
        <div>
          <a 
            href="#" 
            className={"btn-"+ this.props.type +" js-btn-active"}
            onClick={function(e){
              e.preventDefault();
            }}
          ><span>{this.props.text}</span></a>
        </div>
      );
    }
}
  
  export default Btn;