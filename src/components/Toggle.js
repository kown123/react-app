import React, {Component} from 'react';
import { toggleList } from '../js/newBundle'

class Toggle extends Component{
    render(){
      return (
        <ul className="togg-type01 js-toggle-type">
            <li>
                <a 
                    href="/"
                    onClick={function(e){
                        e.preventDefault();
                    }}
                >토글1</a>
                <div className="desc">
                    <ul className="list-type02">
                        <li>암 진단보험금은 암보장개시일 이후에 최초로 진단확정되는 암에 대해서 1회에 한하여 지급합니다.</li>
                        <li>암 진단보험금은 암보장개시일 이후에 최초로 진단확정되는 암에 대해서 1회에 한하여 지급합니다.</li>
                    </ul>
                </div>
            </li>
        </ul>
      );
    }
}
  
  export default Toggle;