import React, {Component} from 'react';
import $ from 'jquery';

class LayerTip extends Component{
    render(){        
        return(
            <div>
                <p className="tit-component-sub">Tooltip</p>
                <a 
                    href="/" 
                    className="btn-ex3"
                    onClick={function(e){
                        e.preventDefault();
                        $(e.target).parent().find(".tooltip").addClass("_active");
                    }.bind(this)}
                >{this.props.text}
                </a>

                <div className="tooltip">
                    <div className="dim_panel"></div>
                    <div className="tip_content_wrap">
                        <ul className="list-type02">
                            <li>태아는 계약자가 산모일 경우 가입 가능합니다.</li>
                            <li>40세 이상의 산모 또는 다태아일 경우 임신 16주 이후 가입이 가능합니다.</li>
                            <li>태아 가입 시, 의무 부가되는 주산기질환 (수술/입원) 특약은 가입시점부터 보장이 개시됩니다.</li>
                            <li>주계약의 경우, 입력한 출생예정일(태아 등재 이후는 출생일) 이후 보장이 개시됩니다.</li>
                        </ul>

                        <a href="#" className="btn-primary js-tooltip-cls">확인</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default LayerTip;
