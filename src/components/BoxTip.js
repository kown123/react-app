import React, {Component} from 'react';

class BoxTip extends Component{
    //tooltip 비활성화
    toolTipCls(e){//target
        var obj = e.target;
        e.preventDefault();
        obj.parents(".js-define").removeClass("on").find(".tip-type").remove();
    }
    render(){
        return(
            <div className="tip-type tips">
                <dl>
                    <dt>{this.props.tit}</dt>
                    <dd>{this.props.desc}</dd>
                </dl>
                <a href="#" className="cls"><span>닫기</span></a>
            </div>
        )
    }
}

export default BoxTip;
