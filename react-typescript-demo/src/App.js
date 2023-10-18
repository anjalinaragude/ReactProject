
import './App.css';
// import HeaderComponent from './Component/HeaderComponent';
import LayoutComponent from './Component/LayoutComponent';
import FooterComponent from './Component/FooterComponent';
import Video from './Component/Video';
import videoDB from './data/data'
import PlayButton from './Component/PlayButton';
import { useState } from 'react';
import AddVideo from './Component/AddVideo';
import VideoList from './Component/VideoList';
function App() {
  const [videos,setVideos] =useState(videoDB)
 
  const addVideos=(video)=>{
     
setVideos([...videos,{...video,id:videos.length+1}])
  }
  

  return (
    <div className='App' >
      {/* <HeaderComponent/> */}
      <LayoutComponent/>
      <FooterComponent/>
      <AddVideo addVideos={addVideos}></AddVideo>
     <VideoList videos={videos}></VideoList>
      {/* <div style={{clear:'both'}}>  */}
      {/* <PlayButton message="play-msg" onPlay={()=>console.log("playyy")} onPause={()=>console.log("pause")} > Play</PlayButton> */}
      {/* <PlayButton message="pause-msg"onClick={()=>alert("playyy")} >Pouse</PlayButton> */}
      
      {/* </div> */}
     
    </div>
  );
}

export default App;
