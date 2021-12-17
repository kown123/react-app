import React, {Component} from 'react';

class BoxRecommend extends Component{
    render(){
      return (
        <div className="box-white product">
            <a 
              href="/" 
              className="js-btn-active"
              onClick={function(e){
                e.preventDefault();
              }}
            >
                <span className="p-name">상품 수식어구<br /><em><span>상품명</span></em></span>
                <span className="mt5">(40,000명 가입)</span>
                <span className="fee">
                    <strong>24,360원</strong>
                    <span className="unit">/ 월</span>
                </span>
                <span className="c-gray4 mt5">80세 보장 20년 납입 시</span>
            </a>
        </div>
      );
    }
}
  
  export default BoxRecommend;