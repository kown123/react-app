import React, {Component} from 'react';

/* import Mobiscroll JS and CSS */
// import mobiscroll from "@mobiscroll/react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import BoxAccent from './components/BoxAccent';
import Tab from './components/Tab';
import BoxApply from './components/BoxApply';
import BoxRecommend from './components/BoxRecommend';
import BoxProd from './components/BoxProd';
import Tag from './components/Tag';
import BoxTip from './components/BoxTip';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      tags:[
        {id:1, clsname:"tag-type", text:"태그1"},
        {id:2, clsname:"tag-type fill", text:"태그2"},
        {id:3, clsname:"tag-type fill yellow", text:"태그3"},
        {id:4, clsname:"tag-type fill coral", text:"태그4"},
        {id:5, clsname:"tag-type fill black", text:"태그5"}
      ]
    }
  }
  render(){
    // window.$ = window.jQuery = jQuery;
    return (
      <div className="App wrap_new">
        <p className="tit-component-sub">Box</p>
        <div className="box-default bg-gray1 mt10">
            <ul className="list-type02">
                <li><code>.box-white</code> border-radius 와 box-shadow가 들어가있는 박스</li>
                <li><code>.product</code> 메인 페이지 에서 사용되는 상품 리스트 형태의 박스</li>
            </ul>
        </div>
        <BoxRecommend></BoxRecommend>

        <div className="box-default bg-gray1 mt50">
            <ul className="list-type02">
                <li><code>.box-default.notice</code> 메인상단에서 사용되는 알림형 박스</li>
            </ul>
        </div>
        <BoxApply></BoxApply>

        <div className="box-default bg-gray1 mt50">
            <ul className="list-type02">
                <li><code>.box-accent</code> 상품안내 페이지 내 상품특징을 표현할때 사용하는 박스</li>
            </ul>
        </div>
        <BoxAccent tit={["원하는 만큼,", <br />,"정해진 기간 동안 보장받는"]} accent="실속 있는 사망보험" subTxt={["미성년 자녀가 있다면",<br />,"양육자금서비스특약으로 한 번 더 안심"]}></BoxAccent>

        <div className="box-default bg-gray1 mt50">
            <ul className="list-type02">
                <li>각 툴팁의 텍스트는 <code>tooltips</code> 데이터 객체를 통해 구성함. </li>
                <li><code>toolTip(this, 데이터 번호, 방향)</code> 함수를 통해 호출.</li>
                <li>방향(선택) 미설정시 default 위로 노출됨.</li>
            </ul>
        </div>
        <BoxTip tit="고액암이란?" desc="뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암"></BoxTip>

        <BoxProd pName="정기보험" pDesc="#해지환금금이 없어요 #저렴한 암보험"></BoxProd>

        <Tag data={this.state.tags}></Tag>

        <div className="box-default bg-gray1 mt50">
            <ul className="list-type02">
                <li> <code>.js-tab-list</code> 클래스를 부여하면 탭기능이 활성화됨.</li>
                <li> <code>.js-tab-cont</code> 클래스로 탭 컨텐츠영역으로 지정함.</li>
                <li><code>a href="#plan1"</code> 함수로 탭컨텐츠 ID를 유니크하게 지정함.</li>
            </ul>
        </div>
        <Tab
          t1="만기교육자금" link1="plan1"
          t2="교육자금 중도인출 설계" link2="plan2"
        ></Tab>
      </div>

    );
  }
}

export default App;
