import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import { toolFunction } from "../js/newBundle";//btn motion

class BoxTip extends Component{
    render(){
        return(
            <div className="txt-qna js-define">
                <a 
                    href="/" 
                    className="js-tip"
                    onClick={function(e){
                        e.preventDefault();
                    }}
                >
                    <span className="ico-bullet4"></span>{this.props.tit}
                </a>
                <div className="tip-type tips">
                    <dl>
                        <dt>{this.props.tit}</dt>
                        <dd>{this.props.desc}</dd>
                    </dl>
                    <a 
                        href="/" 
                        className="cls"
                        onClick={function(e){
                            e.preventDefault();
                        }}
                    >
                        <span>닫기</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default BoxTip;
