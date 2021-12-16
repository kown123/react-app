import React, {Component} from 'react';
import BoxTip from './BoxTip';

class BoxAccent extends Component{  
    render(){
      return (
        <div className="box-accent">
            <div>
                <h2 className="tit">{this.props.tit}<br /><em>{this.props.accent}</em></h2>
                <BoxTip tit="고액암이란?" desc="뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암"></BoxTip>
                <p className="txt-sub">{this.props.subTxt}</p>
                <a href="/" className="btn-detail js-btn-active">보장금액 자세히 보기</a>
            </div>
        </div>
      );
    }
}
  
  export default BoxAccent;