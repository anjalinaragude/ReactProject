import { useState } from 'react';
import './AddVideo.css'
const AddVideo=({addVideos})=>{
    const initialState={
        time:" 1 month ago",
        channel:'Coder Dost',
        verified:true,
        title:'',
        views:''
    }
const [video,setVideo] =useState(initialState)
    const handleChange=(e)=>{
      
        setVideo({...video,
        [e.target.name]:e.target.value})

        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addVideos(video)
        setVideo(initialState)
    }
    return(
        <div>
            <form>
                <input type="text" name='title' value={video.title} placeholder='title' onChange={handleChange}/>
                <input type="text" name='views' value={video.views} placeholder='views' onChange={handleChange}/>
                <button  onClick={handleSubmit}> Add Video</button>
            </form>
        </div>
    )
}
export default AddVideo;