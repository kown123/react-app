import React, {Component} from 'react';

class ColorGuide extends Component{
    render(){
        return(
            <div>
                {/* <!-- color --> */}
                <h2 className="fz24 mt50"><strong>Color</strong></h2>
                <p className="tit-component-sub">text</p>
                <div className="box-default bg-gray1 mt10">
                    <ul className="list-type02">
                        <li>텍스트 컬러</li>
                    </ul>
                </div>
                <div className="flex-box">
                    <p className="c-primary1"><code>.c-primary1</code></p>
                    <p className="c-primary2"><code>.c-primary2</code></p>
                    <p className="c-primary3 bg-primary4"><code>.c-primary3</code></p>
                    <p className="c-primary4"><code>.c-primary4</code></p>
                </div>
                <div className="flex-box">
                    <p className="c-gray1"><code>.c-gray1</code></p>
                    <p className="c-gray2"><code>.c-gray2</code></p>
                    <p className="c-gray3"><code>.c-gray3</code></p>
                    <p className="c-gray4"><code>.c-gray4</code></p>
                    <p className="c-gray5"><code>.c-gray5</code></p>
                    <p className="c-gray6"><code>.c-gray6</code></p>
                    <p className="c-gray7"><code>.c-gray7</code></p>
                </div>
                <div className="flex-box">
                    <p className="c-coral1"><code>.c-coral1</code></p>
                    <p className="c-coral2"><code>.c-coral2</code></p>
                    <p className="c-coral3"><code>.c-coral3</code></p>
                    <p className="c-coral4"><code>.c-coral4</code></p>
                </div>
                <div className="flex-box">
                    <p className="c-blue1"><code>.c-blue1</code></p>
                    <p className="c-blue2"><code>.c-blue2</code></p>
                    <p className="c-blue3"><code>.c-blue3</code></p>
                    <p className="c-blue4"><code>.c-blue4</code></p>
                </div>
                <div className="flex-box">
                    <p className="c-green1"><code>.c-green1</code></p>
                    <p className="c-green2"><code>.c-green2</code></p>
                    <p className="c-green3"><code>.c-green3</code></p>
                    <p className="c-green4"><code>.c-green4</code></p>
                </div>
                <div className="flex-box">
                    <p className="c-orange1"><code>.c-orange1</code></p>
                    <p className="c-orange2"><code>.c-orange2</code></p>
                    <p className="c-orange3"><code>.c-orange3</code></p>
                    <p className="c-orange4"><code>.c-orange4</code></p>
                </div>

                <p className="tit-component-sub">background</p>
                <div className="box-default bg-gray1 mt10">
                    <ul className="list-type02">
                        <li>background 컬러</li>
                    </ul>
                </div>
                <div className="flex-box">
                    <p className="bg-primary1"><code>.bg-primary1</code></p>
                    <p className="bg-primary2"><code>.bg-primary2</code></p>
                    <p className="bg-primary3"><code>.bg-primary3</code></p>
                    <p className="bg-primary4 c-primary3"><code>.bg-primary4</code></p>
                </div>
                <div className="flex-box">
                    <p className="bg-gray1"><code>.bg-gray1</code></p>
                    <p className="bg-gray2"><code>.bg-gray2</code></p>
                    <p className="bg-gray3"><code>.bg-gray3</code></p>
                    <p className="bg-gray4"><code>.bg-gray4</code></p>
                    <p className="bg-gray5 c-gray3"><code>.bg-gray5</code></p>
                    <p className="bg-gray6 c-gray2"><code>.bg-gray6</code></p>
                    <p className="bg-gray7 c-gray1"><code>.bg-gray7</code></p>
                </div>
                <div className="flex-box">
                    <p className="bg-coral1"><code>.bg-coral1</code></p>
                    <p className="bg-coral2"><code>.bg-coral2</code></p>
                    <p className="bg-coral3"><code>.bg-coral3</code></p>
                    <p className="bg-coral4"><code>.bg-coral4</code></p>
                </div>
                <div className="flex-box">
                    <p className="bg-blue1"><code>.bg-blue1</code></p>
                    <p className="bg-blue2"><code>.bg-blue2</code></p>
                    <p className="bg-blue3"><code>.bg-blue3</code></p>
                    <p className="bg-blue4"><code>.bg-blue4</code></p>
                </div>
                <div className="flex-box">
                    <p className="bg-green1"><code>.bg-green1</code></p>
                    <p className="bg-green2"><code>.bg-green2</code></p>
                    <p className="bg-green3"><code>.bg-green3</code></p>
                    <p className="bg-green4"><code>.bg-green4</code></p>
                </div>
                <div className="flex-box">
                    <p className="bg-orange1"><code>.bg-orange1</code></p>
                    <p className="bg-orange2"><code>.bg-orange2</code></p>
                    <p className="bg-orange3"><code>.bg-orange3</code></p>
                    <p className="bg-orange4"><code>.bg-orange4</code></p>
                </div>
            </div>            
        )
    }
}
export default ColorGuide;
