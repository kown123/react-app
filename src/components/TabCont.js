import React, {Component} from 'react';

class TabCont extends Component{
    render(){
      return (
            <div>
                <p className="fz16 mt10 al-c">
                    {this.props.cont}
                </p>
            </div>
      );
    }
}
  
export default TabCont;