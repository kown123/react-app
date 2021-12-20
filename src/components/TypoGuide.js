import React, {Component} from 'react';

class TyopGuide extends Component{
    render(){
        return(
            <div>
                {/* <!-- typo --> */}
                <h2 className="fz24 mt50"><strong>Typography</strong></h2>
                <div className="box-default bg-gray1 mt10">
                    <ul className="list-type02">
                        <li> 폰트 : SpoqaHanSans</li>
                        <li> 굵기 : light(100), regular(400), medium(500), bold(700) </li>
                    </ul>
                </div>
                
                <p className="tit-component-sub">weight</p>
                <p className="fz18 mt10 fz-bold">암보장을 위한 상품 [bold] 700</p>
                <p className="fz18 mt10 fz-medium">암보장을 위한 상품 [medium] 500</p>
                <p className="fz18 mt10 fz-regular">암보장을 위한 상품 [regular] 400</p>
                <p className="fz18 mt10 fz-light">암보장을 위한 상품 [light] 100</p>

                <p className="tit-component-sub">size</p>
                <p className="fz30 mt10">암보장을 위한 상품 [30px]</p>
                <p className="fz24 mt10">암보장을 위한 상품 [24px]</p>
                <p className="fz18 mt10">암보장을 위한 상품 [18px]</p>
                <p className="fz16 mt10">암보장을 위한 상품 [16px]</p>
                <p className="fz14 mt10">암보장을 위한 상품 [14px]</p>
                <p className="fz12 mt10">암보장을 위한 상품 [12px]</p>
            </div>            
        )
    }
}
export default TyopGuide;
