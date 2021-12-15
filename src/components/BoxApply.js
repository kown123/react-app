import React, {Component} from 'react';

class BoxApply extends Component{
    render(){
      return (
        <div className="box-default notice _round">
            <a href="/" className="js-btn-active">
                고객님께서 <br />현재 <strong>가입중인 상품</strong>이<br /><strong className="c-primary2">6건</strong> 있어요.
            </a>
        </div>
      );
    }
}
  
  export default BoxApply;