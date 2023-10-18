
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
  const [editableVideo,setEditableVideo]=useState(null)
 
  const addVideos=(video)=>{
     
setVideos([...videos,{...video,id:videos.length+1}])
  }
  const deleteVideo=(id)=>{
    setVideos(videos.filter(item=>item.id!==id))
    
 console.log(id);
  }
  const editVideo=(id)=>{
    setEditableVideo(videos.find(item=>item.id===id))
    

  }
  const updateVideo=(video)=>{
    const index =videos.findIndex(item=>item.id===video.idd)
  const newVideos=[...videos]
  newVideos.splice(index,1,video)
  setVideos(newVideos)
  }
  

  return (
    <div className='App' >
      {/* <HeaderComponent/> */}
      <LayoutComponent/>
      <FooterComponent/>
      <AddVideo addVideos={addVideos} updateVideo={updateVideo} editableVideo={editableVideo}></AddVideo>
     <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo}></VideoList>
      {/* <div style={{clear:'both'}}>  */}
      {/* <PlayButton message="play-msg" onPlay={()=>console.log("playyy")} onPause={()=>console.log("pause")} > Play</PlayButton> */}
      {/* <PlayButton message="pause-msg"onClick={()=>alert("playyy")} >Pouse</PlayButton> */}
      
      {/* </div> */}
     
    </div>
  );
}

export default App;
