import React, {Component} from 'react';

class Tab extends Component{
    render(){
      return (
        <div>
            <ul className="tab-list js-tab-list mt10">
                <li><a href={"#" + this.props.link1} className="on">{this.props.t1}</a></li>
                <li><a href={"#" + this.props.link2}>{this.props.t2}</a></li>
            </ul>
            <div id={this.props.link1} className="js-tab-cont">
                <p className="fz16 mt10 al-c">
                    {this.props.cont1}
                </p>
            </div>
            <div id={this.props.link2} className="js-tab-cont" style={{display:"none"}}>
                <p className="fz16 mt10 al-c">
                    {this.props.cont2}
                </p>
            </div>
        </div>
      );
    }
}
  
export default Tab;