import React, {Component} from 'react';
import { btnAction } from '../js/newBundle'

class LinkList extends Component{
    render(){
        let lists = [],
        data = this.props.data;
        for(let i = 0; i < data.length; i++){
            lists.push(
            <li key={data[i].id}>
                <a 
                    href={data[i].link}
                    onClick={function(e){
                        e.preventDefault();
                    }}
                >{data[i].txt}
                </a>
            </li>
            )            
        }

      return (
        <ul className="list-type01">
            {lists}
        </ul>
      );
    }
}
  
  export default LinkList;