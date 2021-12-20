import React, {Component} from 'react';
/* import Mobiscroll JS and CSS */
// import mobiscroll from "@mobiscroll/react";
// import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import BoxAccent from './components/BoxAccent';
import Tab from './components/Tab';
import TabCont from './components/TabCont'
import BoxApply from './components/BoxApply';
import BoxRecommend from './components/BoxRecommend';
import BoxProd from './components/BoxProd';
import Tag from './components/Tag';
import BoxTip from './components/BoxTip';
import Btn from './components/Btn';
import Icon from './components/Icon'
import Toggle from './components/Toggle'
// import Banner from './components/Banner'
import Banner from './components/Banner'
import LinkList from './components/LinkList';
import SassGuide from './components/SassGuide';
import TyopGuide from './components/TypoGuide';
import ColorGuide from './components/ColorGuide';
import LayerTip from './components/LayerTip';
import Popup from './components/Popup';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      
      //탭 리스트 
      tablist:[
        {id:0, txt:"만기교육자금"},
        {id:1, txt:"교육자금 중도인출 설계"}
      ],
      selected_tab:0, //탭 인덱스
      //탭 컨텐츠
      tab_content:[
        {cont:"탭 컨텐츠1"},
        {cont:"탭 컨텐츠2"}
      ],

      //box 상품 특징 컨텐츠
      box_content:{tit:"원하는 만큼,\n정해진 기간 동안 보장받는", accent:"실속 있는 사망보험", subTxt:"미성년 자녀가 있다면 \n양육자금서비스특약으로 한 번 더 안심"},

      //태그 리스트
      tags:[
        {id:1, clsname:"tag-type", text:"태그1"},
        {id:2, clsname:"tag-type fill", text:"태그2"},
        {id:3, clsname:"tag-type fill yellow", text:"태그3"},
        {id:4, clsname:"tag-type fill coral", text:"태그4"},
        {id:5, clsname:"tag-type fill black", text:"태그5"}
      ],

      //배너 리스트
      bann_list:[
        {id:0, link:"#link1", txt:"배너1"},
        {id:1, link:"#link2", txt:"배너2"},
        {id:2, link:"#link3", txt:"배너3"}
      ],

      //링크 리스트
      link_list:[
        {id:0, link:"link1", txt:"링크1"}
      ]
    }
  }
  render(){
    var _boxAccent = null;
    _boxAccent = <BoxAccent tit={this.state.box_content.tit} accent={this.state.box_content.accent} subTxt={this.state.box_content.subTxt}></BoxAccent>

    return (
      <div className="App wrap_new">

        <SassGuide></SassGuide>
        <ColorGuide></ColorGuide>
        <TyopGuide></TyopGuide>

        {/* 버튼 모음 */}
        <h2 className="fz24 mt50"><strong>Component</strong></h2>
        <p className="tit-component-sub mt10">Btn</p>
        <Btn type="primary" text="버튼 타입1"></Btn>
        <Btn type="second" text="버튼 타입2"></Btn>
        <Btn type="ex1" text="버튼 타입3"></Btn>
        <Btn type="ex2" text="버튼 타입4"></Btn>
        
        {/* icon 모음 */}
        <p className="tit-component-sub mt50">Icon</p>
        <div className="mt10">
          <Icon type="bullet" num="0"></Icon>
          <Icon type="bullet" num="1"></Icon>
          <Icon type="bullet" num="2"></Icon>
          <Icon type="bullet" num="3"></Icon>
          <Icon type="bullet" num="4"></Icon>
          <Icon type="bullet" num="5"></Icon>
          <Icon type="bullet" num="6"></Icon>
          <Icon type="bullet" num="7"></Icon>
          <Icon type="bullet" num="8"></Icon>
          <Icon type="bullet" num="9"></Icon>
          <Icon type="bullet" num="10"></Icon>
          <Icon type="bullet" num="11"></Icon>
          <Icon type="bullet" num="12"></Icon>
          <Icon type="bullet" num="13"></Icon>
          <Icon type="bullet" num="14"></Icon>
        </div>
        <div className="mt10">
          <Icon type="func" num="0"></Icon>
          <Icon type="func" num="1"></Icon>
          <Icon type="func" num="2"></Icon>
          <Icon type="func" num="3"></Icon>
          <Icon type="func" num="4"></Icon>
          <Icon type="func" num="5"></Icon>
          <Icon type="func" num="6"></Icon>
          <Icon type="func" num="7"></Icon>
          <Icon type="func" num="8"></Icon>
          <Icon type="func" num="9"></Icon>
          <Icon type="func" num="10"></Icon>
          <Icon type="func" num="11"></Icon>
          <Icon type="func" num="12"></Icon>
          <Icon type="func" num="13"></Icon>
          <Icon type="func" num="14"></Icon>
        </div>
        <div className="mt10">
          <Icon type="emoji" num="0"></Icon>
          <Icon type="emoji" num="1"></Icon>
          <Icon type="emoji" num="2"></Icon>
          <Icon type="emoji" num="3"></Icon>
          <Icon type="emoji" num="4"></Icon>
          <Icon type="emoji" num="5"></Icon>
          <Icon type="emoji" num="6"></Icon>
          <Icon type="emoji" num="7"></Icon>
          <Icon type="emoji" num="8"></Icon>
          <Icon type="emoji" num="9"></Icon>
          <Icon type="emoji" num="10"></Icon>
          <Icon type="emoji" num="11"></Icon>
          <Icon type="emoji" num="12"></Icon>
        </div>
        <div className="mt10">
          <Icon type="prod" num="0"></Icon>
          <Icon type="prod" num="1"></Icon>
          <Icon type="prod" num="2"></Icon>
          <Icon type="prod" num="3"></Icon>
          <Icon type="prod" num="4"></Icon>
          <Icon type="prod" num="5"></Icon>
          <Icon type="prod" num="6"></Icon>
          <Icon type="prod" num="7"></Icon>
          <Icon type="prod" num="8"></Icon>
          <Icon type="prod" num="9"></Icon>
          <Icon type="prod" num="10"></Icon>
          <Icon type="prod" num="11"></Icon>
          <Icon type="prod" num="12"></Icon>
          <Icon type="prod" num="13"></Icon>
          <Icon type="prod" num="14"></Icon>
          <Icon type="prod" num="15"></Icon>
          <Icon type="prod" num="16"></Icon>
          <Icon type="prod" num="17"></Icon>
          <Icon type="prod" num="18"></Icon>
        </div>
        <div className="mt10">
          <Icon type="share" num="0"></Icon>
          <Icon type="share" num="1"></Icon>
          <Icon type="share" num="2"></Icon>
          <Icon type="share" num="3"></Icon>
        </div>

        {/* Box 모음 */}
        <p className="tit-component-sub mt50">BoxRecommend</p>
        <BoxRecommend></BoxRecommend>

        <p className="tit-component-sub mt50">BoxApply</p>
        <BoxApply></BoxApply>
        
        <p className="tit-component-sub mt50">BoxAccent</p>
        {_boxAccent}

        <p className="tit-component-sub mt50">BoxTip</p>
        <BoxTip tit="고액암이란?" desc="뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암"></BoxTip>

        <LayerTip location="./views/common/ct/CT00119L.html" text="태아 안내 >"></LayerTip>
        
        <Popup text="보장금액 자세히 보기"></Popup>

        <p className="tit-component-sub mt50">BoxProd</p>
        <BoxProd pName="정기보험" pDesc="#해지환금금이 없어요 #저렴한 암보험"></BoxProd>

        <p className="tit-component-sub mt50">Banner</p>
        <Banner data={this.state.bann_list}></Banner>

        <p className="tit-component-sub mt50">Tab &amp; TabCont</p>
        <Tab
          data={this.state.tablist}
          current={this.state.selected_tab}
          onChangeTab={function(id){
            this.setState({
              selected_tab:Number(id)
            })
          }.bind(this)}
        ></Tab>
        <TabCont content={this.state.tab_content[this.state.selected_tab].cont}></TabCont>

        <p className="tit-component-sub mt50">Toggle</p>
        <Toggle></Toggle>
        <p className="tit-component-sub mt50">LinkList</p>
        <LinkList data={this.state.link_list}></LinkList>


        <p className="tit-component-sub mt50">Tag list</p>
        <Tag data={this.state.tags}></Tag>

      </div>

    );
  }
}

export default App;
