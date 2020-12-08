import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = () => {
    return (
        <div className = "YouTube-wrapper">
            <div className = "img-thumb">
                <img src= " http://i3.ytimg.com/vi/ywDyFmPIj3Y/hqdefault.jpg" alt= ""/>
            </div>
            <p className="title"> Title here</p>
            <p  className="desc"> desc Here</p>
        </div>
    )
}

export default YoutubeComp;