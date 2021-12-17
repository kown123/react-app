import React, {Component} from 'react';

class TabCont extends Component{
    render(){
      return (
        <div className="fz16 mt10 al-c">
            {this.props.content}
        </div>
      );
    }
}
  
export default TabCont;