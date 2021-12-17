import React, {Component} from 'react';
import $ from 'jquery'
import { bannSwiper } from '../js/newBundle'

class Banner extends Component{
    render(){
        console.log("Banner Render");
        let lists = [],
            data = this.props.data;
        for(let i = 0; i < data.length; i++){
            lists.push(
                <div className="swiper-slide" key={data[i].id}>
                    <div className="fz24 box-default mt0 bg-gray3">
                        <a href={data[i].link}>
                            <strong>{data[i].txt}</strong>
                        </a>
                    </div>
                </div>
            )
        }
      return (
        
        // <!-- Slider main container -->
        <div className="swiper-container mt10">
            <div className="swiper-wrapper">
                {lists}
            </div>
            <div className="swiper-pagination"></div>      
        </div>
      );
    }
}
  
  export default Banner;