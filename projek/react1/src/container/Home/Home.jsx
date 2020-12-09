import React, {Component} from 'react';
import YoutubeComp from '../../component/YouTube/YouTubeComp';
import YouTubeComp from '../../component/YouTube/YouTubeComp';

class Home extends Component {
    render(){
        return(
            <div>
                <p> Youtube Component</p>
                <hr/>
                
            <YouTubeComp 
                time= "7.4" 
                title = "tutuorial React" 
                desc="Pengenalan React JS"/>
            <YouTubeComp 
                time= "7.7" 
                title="Tutorial Reac 2" 
                desc="Pengenalan Dasar-dasar Js"/>
            <YouTubeComp 
                time= "7.9" 
                title = "Tutorial React 3" 
                desc="Membuat StateFull Component"/>
            <YouTubeComp 
                time= "7.9" 
                title = "Tutorial React 4" 
                desc="Pengenalan Stateless COmponen"/>
            <YouTubeComp/>

            </div>


        )
    }
}
export default Home;