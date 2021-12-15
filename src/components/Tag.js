import React, {Component} from 'react';

class Tag extends Component{
    render(){
        let lists = [],
            data = this.props.data;

        for(let i =0; i < data.length; i++){
            lists.push(<span key={data[i].id} className={data[i].clsname}>{data[i].text}</span>);
            // debugger;
        }
      return (
        <p>
            {lists}
        </p>
      );
    }
}
  
export default Tag;