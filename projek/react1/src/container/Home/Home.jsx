import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTube/YouTubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p> Youtube Component</p>
                <hr/>
                
            <YouTubeComp time= "7.4" title = "tutuorial React"/>
            <YouTubeComp time= "7.7"/>
            <YouTubeComp time= "7.9"/>
            <YouTubeComp/>

            </div>


        )
    }
}
export default Home;