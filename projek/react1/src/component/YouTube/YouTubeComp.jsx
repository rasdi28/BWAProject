import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className = "YouTube-wrapper">
            <div className = "img-thumb">
                <img src= " http://i3.ytimg.com/vi/ywDyFmPIj3Y/hqdefault.jpg" alt= ""/>
                <p className = "time">{props.time}</p>
            </div>
            <p className="title"> Title here</p>
            <p  className="desc"> desc Here</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '00.00'
}
export default YoutubeComp;
