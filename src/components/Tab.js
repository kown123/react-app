import React, {Component} from 'react';

class Tab extends Component{
    render(){
        var lists = [],
            data = this.props.data;
        for(var i = 0; i < data.length; i++){
            lists.push(
                <li key={data[i].id}>
                    <a
                        href="/" 
                        data-id={data[i].id}
                        className={ this.props.current == data[i].id ? "on": "" }
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeTab(e.target.dataset.id);
                        }.bind(this)}
                    >{data[i].txt}</a>
                </li>
            );
        }

        return (
            <ul className="tab-list mt10">
                {lists}
            </ul>
        );
    }
}
  
export default Tab;