import React, {Component} from 'react';
import { toolFunction } from "../js/newBundle";//btn motion

class BoxTip extends Component{
    render(){
        return(
            <div className="txt-qna js-define">
                <a href="#" className="js-tip"><span className="ico-bullet4"></span>{this.props.tit}</a>
                <div className="tip-type tips">
                    <dl>
                        <dt>{this.props.tit}</dt>
                        <dd>{this.props.desc}</dd>
                    </dl>
                    <a href="#" className="cls"><span>닫기</span></a>
                </div>
            </div>
        )
    }
}

export default BoxTip;
