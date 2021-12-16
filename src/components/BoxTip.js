import React, {Component} from 'react';
import $ from 'jquery';

class BoxTip extends Component{
    tipOpen(e){
        // console.log(e.currentTarget);
        e.preventDefault();
        $(e.currentTarget).parent().addClass("on");
    }
    tipCls(e){
        e.preventDefault();
        $(e.currentTarget).parents(".js-define").removeClass("on");
    }
    render(){
        return(
            <div className="txt-qna js-define">
                <a href="#" onClick={this.tipOpen}><span className="ico-bullet4"></span>{this.props.tit}</a>
                <div className="tip-type tips">
                    <dl>
                        <dt>{this.props.tit}</dt>
                        <dd>{this.props.desc}</dd>
                    </dl>
                    <a href="#" className="cls" onClick={this.tipCls}><span>닫기</span></a>
                </div>
            </div>
        )
    }
}

export default BoxTip;
