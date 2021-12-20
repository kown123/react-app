import React, {Component} from 'react';

class SassGuide extends Component{
    render(){
        return(
            <div>
                {/* <!-- SASS --> */}
                <h2 className="fz24 mt0"><strong>SASS - 정의</strong></h2>
                <div className="box-default bg-gray1 mt10">
                    <ul className="list-type02">
                        <li> 클래스를 생성할때는 하이픈(-)을 사용한다. <br />예시: btn_type(기존) &ndash;&gt;  btn-type (변경)</li>
                        <li> 운영상에 지속적으로 파생되어지는 소스 관리를 위해 공통으로 사용되어지는 요소들은 변수로 등록하여 사용하며 해당 변수를 include 또는 extend 하여 표준화 한다.</li>
                    </ul>
                </div>
                <p className="tit-component mt10">$easing</p>
                <p className="tit-component-sub">transition duration</p>
                <p><strong><code>$easing</code></strong> :cubic-bezier(0.4, 0, 0.2, 1);</p>
                <p><strong><code>$easing-bounce</code></strong> :cubic-bezier(0.68, -0.55, 0.27, 1.55);</p>
                <p className="tit-component-sub">transition timing function</p>
                <p><strong><code>$easingTime-f</code></strong> :빠르게 .2s;</p>
                <p><strong><code>$easingTime-n</code></strong> :보통 .3s;</p>
                <p><strong><code>$easingTime-s</code></strong> :느리게 .7s;</p>
                <p className="tit-component">$color</p>
                <p className="tit-component-sub">primary</p>
                <div className="flex-box al_c color-guide">
                    <span className="item bg-primary1">$cyan<br />#02a2af</span>
                    <span className="item bg-primary2">$yellow<br />#FFC40D</span>
                    <span className="item bg-primary3">$white<br />#fff</span>
                    <span className="item bg-primary4">$gray-900<br />#253237</span>
                </div>
                <p className="tit-component-sub">secondary</p>
                <div className="flex-box _scroll col4 al_c color-guide">
                    <span className="item bg-gray1">$gray-50</span>
                    <span className="item bg-gray2">$gray-100</span>
                    <span className="item bg-gray3">$gray-200</span>
                    <span className="item bg-gray4">$gray-400</span>
                    <span className="item bg-gray5">$gray-600</span>
                    <span className="item bg-gray6">$gray-800</span>
                    <span className="item bg-gray7">$gray-900</span>
                    <span className="item bg-coral1">$coral-100</span>
                    <span className="item bg-coral2">$coral-200</span>
                    <span className="item bg-coral3">$coral-400</span>
                    <span className="item bg-coral4">$coral-900</span>
                    <span className="item bg-orange1">$orange-100</span>
                    <span className="item bg-orange2">$orange-200</span>
                    <span className="item bg-orange3">$orange-400</span>
                    <span className="item bg-orange4">$orange-900</span>
                    <span className="item bg-blue1">$blue-100</span>
                    <span className="item bg-blue2">$blue-300</span>
                    <span className="item bg-blue3">$blue-500</span>
                    <span className="item bg-blue4">$blue-700</span>
                    <span className="item bg-green1">$green-100</span>
                    <span className="item bg-green2">$green-300</span>
                    <span className="item bg-green3">$green-500</span>
                    <span className="item bg-green4">$green-700</span>
                </div>
            </div>            
        )
    }
}
export default SassGuide;
