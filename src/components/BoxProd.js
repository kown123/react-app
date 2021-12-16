import React, {Component} from 'react';

class BoxProd extends Component{
    // createMarkup() {
    //     return {__html: '<p className="mt10 fz14 c-gray4">'+this.props.pDesc+'</p>'};
    // }
    render(){
        return(
            <div className="flex-box al_c">
                <div className="box-white">
                    <span className="ico-prod0"></span>
                    <p className="mt15 fz18">{this.props.pName}</p>
                    <p className="mt10 fz14 c-gray4">{this.props.pDesc}</p>
                </div>
            </div>
        )
    }
}

export default BoxProd;
