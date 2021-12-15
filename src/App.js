import './App.css';
import React, {Component} from 'react';
// import jquery from "jquery";
// import Content from "./components/Content";
// import Subject from "./components/Subject";
// import styles from "../public/new_bundle.css";
import BoxAccent from './components/BoxAccent';
import Tab from './components/Tab';
import BoxApply from './components/BoxApply';
import BoxRecommend from './components/BoxRecommend';
import Tag from './components/Tag';
// import ListGuide from './components/ListGuide';

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
    return (
      <div className="App wrap_new">

        <BoxRecommend></BoxRecommend>

        <BoxApply></BoxApply>

        <BoxAccent tit={["원하는 만큼,", <br />,"정해진 기간 동안 보장받는"]} accent="실속 있는 사망보험" subTxt={["미성년 자녀가 있다면",<br />,"양육자금서비스특약으로 한 번 더 안심"]}></BoxAccent>

        {/* <ListGuide></ListGuide> */}

        <Tag data={this.state.tags}></Tag>

        <Tab
          t1="만기교육자금" link1="plan1" cont1="컨텐츠 내용"
          t2="교육자금 중도인출 설계" link2="plan2" cont2="컨텐츠 내용2"
        ></Tab>
      </div>

    );
  }
}

export default App;
