import React, {Component} from 'react';

class ListGuide extends Component{
    render(){
      return (
        <div class="box-default bg-gray1 mt10">
            <ul class="list-type02">
                <li> <code>.js-tab-list</code> 클래스를 부여하면 탭기능이 활성화됨.</li>
                <li> <code>.js-tab-cont</code> 클래스로 탭 컨텐츠영역으로 지정함.</li>
                <li><code>a href="#plan1"</code> 함수로 탭컨텐츠 ID를 유니크하게 지정함.</li>
            </ul>
        </div>        
      );
    }
}
  
export default ListGuide;