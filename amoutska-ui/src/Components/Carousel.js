import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    // height: '160px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
};


function Carousell() {
    return (

        <Carousel autoplay style={{ width:"25vw"}}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>

    );
}
export default Carousell;