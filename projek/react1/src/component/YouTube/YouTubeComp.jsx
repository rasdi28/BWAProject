import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className = "YouTube-wrapper">
            <div className = "img-thumb">
                <img src= " http://i3.ytimg.com/vi/ywDyFmPIj3Y/hqdefault.jpg" alt= ""/>
                <p className = "time">{props.time}</p>
            </div>
            <p className="title"> {props.title} </p>
            <p  className="desc"> {props.desc} </p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time : '00.00',
    title : "Tutorial React JS",
    desc : 'Pengenalan React JS'

}
export default YoutubeComp;
