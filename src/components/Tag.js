import React, {Component} from 'react';

class Tag extends Component{
    render(){
        let tagLists = [],
            data = this.props.data;

        for(let i =0; i < data.length; i++){
            tagLists.push(<span key={data[i].id} className={data[i].clsname}>{data[i].text}</span>);
            // debugger;
        }
      return (
        <p>
            {tagLists}
        </p>
      );
    }
}
  
export default Tag;