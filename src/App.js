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
import './App.css';
// import $ from 'jquery';


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
      ]
    }
  }
  render(){
    var _boxAceent = null;
    _boxAceent = <BoxAccent tit={this.state.box_content.tit} accent={this.state.box_content.accent} subTxt={this.state.box_content.subTxt}></BoxAccent>

    return (
      <div className="App wrap_new">
        <p className="tit-component-sub">BoxRecommend</p>
        <BoxRecommend></BoxRecommend>

        <p className="tit-component-sub">BoxApply</p>
        <BoxApply></BoxApply>
        

        <p className="tit-component-sub">BoxAccent</p>
        {_boxAceent}

        <p className="tit-component-sub">BoxTip</p>
        <BoxTip tit="고액암이란?" desc="뼈 및 관절연골, 뇌 및 중추신경계통, 림프, 조혈 및 관련조직 등에 발생하는 암"></BoxTip>

        <p className="tit-component-sub">BoxProd</p>
        <BoxProd pName="정기보험" pDesc="#해지환금금이 없어요 #저렴한 암보험"></BoxProd>


        <p className="tit-component-sub">Tab &amp; TabCont</p>
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

        <p className="tit-component-sub">Tag list</p>
        <Tag data={this.state.tags}></Tag>

      </div>

    );
  }
}

export default App;
