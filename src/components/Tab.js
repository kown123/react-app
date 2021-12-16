import React, {Component} from 'react';
import TabCont from './TabCont'
import $ from 'jquery';

class Tab extends Component{
    constructor(props){
        super(props);
        this.state = {
            content_id:0,
            tab_content:[
                {id:0, cont:"컨텐츠1"},
                {id:1, cont:"컨텐츠2"}
            ]
        }
    }
    tabToggle(e){
        // let $cont = $(e.currentTarget).attr("href");

        e.preventDefault();
        $(e.currentTarget).addClass("on").parent().siblings().find("> a").removeClass("on");
        $(e.currentTarget).parents(".tab-list").next(".js-tab-cont").hide();
        //this.setState(content_id = $(e.currentTarget).parent().index());
    }

    render(){
        // if(this.state.content_id == 0){

        // }else if(this.state.content_id == 1){
            
        // }
      return (
        <div>
            <ul className="tab-list mt10">
                <li><a href={"#" + this.props.link1} className="on" onClick={this.tabToggle}>{this.props.t1}</a></li>
                <li><a href={"#" + this.props.link2} onClick={this.tabToggle}>{this.props.t2}</a></li>
            </ul>
            {/* <div id={this.props.link1} className="js-tab-cont">
                <p className="fz16 mt10 al-c">
                    {this.props.cont1}
                </p>
            </div> */}
            <TabCont cont={this.state.tab_content[this.state.content_id].cont}></TabCont>
        </div>
      );
    }
}
  
export default Tab;