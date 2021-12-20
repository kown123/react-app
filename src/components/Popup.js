import React, {Component} from 'react';
import $ from 'jquery';

class Popup extends Component{
    render(){        
        return(
            <div>
            <a 
                href="/" 
                className="btn-detail js-btn-active"
                onClick={function(e){
                    e.preventDefault();
                    $(e.target).parent().find(".pop_section_dx").addClass("on");
                }.bind(this)}
            >{this.props.text}</a>
            <div className="popup_area">
                <section className="pop_section_dx">
                <div className="popup renew">
                    <a 
                        href="#" 
                        className="btn-pop-cls js-pop-close"
                        onClick={function(e){
                            e.preventDefault();
                            $(e.target).parents(".pop_section_dx").removeClass("on");
                        }}
                    >
                        <span className="ico-header4"><span>팝업닫기</span></span>
                    </a>
                    <div className="pop-contents">
                        <h1 className="fz24"><strong>{this.props.text}</strong></h1>
                        <p className="fz16 mt30">고액암 2천만원부터 최대 1억2천만원,<br />일반암 1천만원부터 최대 6천만원까지 보장 가능합니다.</p>
                        <ul className="benefit-ex mt30">
                            <li>
                                <div className="subj">
                                    <strong className="t">소액암<span>[1]</span><br />진단시</strong>
                                </div>
                                <div className="amount">
                                    <span className="circle t2">600만원<br />보장</span>
                                </div>
                            </li>
                            <li>
                                <div className="subj">
                                    <strong className="t">유방암,<br />전립선암<br />진단시</strong>    
                                </div>
                                <div className="amount">
                                    <span className="circle">1,200만원<br />보장</span>
                                    {/* <!-- 차액 추가지급 --> */}
                                    <span className="arr"></span>
                                    <div className="add">
                                        <p className="fz12 bg-primary3 c-gray4">차액 추가지급</p>
                                        <span className="circle small mt5">4,800<br />만원</span>    
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subj">
                                    <strong className="t">일반암<span>[3]</span><br />진단시</strong>
                                </div>
                                <div className="amount">
                                    <span className="circle t3">6,000만원<br />보장</span>
                                    {/* <!-- 차액 추가지급 --> */}
                                    <span className="arr"></span>
                                    <div className="add">
                                        <p className="fz12 bg-primary3 c-gray4">차액 추가지급</p>
                                        <span className="circle t3 small mt5">6,000<br />만원</span>    
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subj">
                                    <strong className="t">고액암<span>[4]</span><br />진단시</strong>
                                </div>
                                <div className="amount">
                                    <span className="circle t3">1억 2천만원<br />보장</span>
                                </div>
                            </li>
                        </ul>
                        <p className="txt-exclam"><span className="ico-bullet6"></span> 보험가입금액 6천만원 선택 시</p>
                        <p className="txt-exclam"><span className="ico-bullet6"></span> 50세 이상, 보험가입금액 4천만원까지 선택 가능</p>
                        <p className="txt-exclam"><span className="ico-bullet6"></span> 가입 후 2년 이후 지급 사유 발생 시</p>
                        <hr className="hr" />

                        <ul className="list-type03">
                            <li>
                                <span className="num">[1]</span>
                                <dl>
                                    <dt className="fz16">소액암이란?</dt>
                                    <dd>기타피부암, 감상선암, 대정점막내암, 경계성종양 및 제자리암</dd>
                                </dl>
                            </li>
                            <li>
                                <span className="num">[2]</span>
                                <dl>
                                    <dt className="fz16">일반암이란?</dt>
                                    <dd>고액암, 유방암/전립선암, 소액암 이외의 암</dd>
                                </dl>
                            </li>
                            <li>
                                <span className="num">[3]</span>
                                <dl>
                                    <dt className="fz16">고액암이란?</dt>
                                    <dd>뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암</dd>
                                </dl>

                            </li>
                        </ul>
                        <ul className="togg-type01 js-toggle-type _expand mt50">
                            <li>
                                <a href="#">지급제한사항 안내</a>
                                <div className="desc">
                                    <ul className="list-type02">
                                        <li>암 진단보험금은 암보장개시일 이후에 최초로 진단 확정되는 암에 대해서 1회에 한하여 지급합니다.</li>
                                        <li>'암보장개시일'이란 암(기타피부암, 갑상선암, 대장점막내암, 경계성종양 및 제자리암 제외)에 대한 보장이 개시되는 날로, 계약일부터 그 날을 포함하여 90일이 지난 날의 다음 날을 말합니다. 다만, 부활(효력 회복)계약의 경우에는 부활(효력 회복)일부터 부활(효력 회복)일을 포함하여 90일이 지난 날의 다음 날을 말합니다.</li>
                                        <li>약관 제3조(「암」, 「기타피부암」 및 「갑상선암」의 정의 및 진단 확정) 및 약관 제4조(「대장점막내암」의 정의 및 진단 확정)에 따라 기타피부암, 갑상선암 및 대장점막내암은 암의 정의에서 제외되며, 기타피부암, 갑상선암 또는 대장점막내암으로 보험금 지급 사유가 발생하는 경우에는 각각에 해당하는 진단보험금을 지급하고 암 진단보험금은 지급하지 않습니다.</li>
                                        <li>한국표준질병·사인분류 지침서의 “사망 및 질병이환의 분류번호부여를 위한 선정준칙과 지침”에 따라 C77~C80[이차성 및 상세불명 부위의 악성 신생물(암)]로 분류되고, 일차성 악성 신생물(암)이 확인되는 경우에는 원발부위(최초 발생한 부위)를 기준으로 분류합니다.</li>
                                        <li>가입 후 2년 미만에 암(암의 경우 암보장개시일 이후), 기타피부암, 갑상선암, 대장점막내암, 경계성종양 또는 제자리암의 진단보험금 지급 사유가 발생한 경우에는 가입 후 2년 이후에 지급되는 해당 진단보험금의 50%만 지급합니다.</li>
                                        <li>‘가입 후 2년 미만'이라 함은 계약일부터 그 날을 포함하여 2년이 되는 시점의 계약해당일의 전일까지를 말하며, '가입 후 2년 이후'라 함은 계약일부터 그 날을 포함하여 2년이 되는 시점의 계약해당일 이후를 말합니다.</li>
                                        <li>이 자료는 요약된 것이므로, 지급 제한 관련 자세한 사항은 해당 상품의 약관 및 상품설명서를 확인하시기 바랍니다.</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                        <div className="btn-wrap mt30">
                            <a href="#" className="btn-primary js-pop-close js-btn-active"><span>확인</span></a>
                        </div>
                    </div>
                </div>
                </section>
            </div>
        </div>
        )
    }
}

export default Popup;
