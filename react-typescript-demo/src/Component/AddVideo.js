import { useEffect, useState } from 'react';
import './AddVideo.css'
const AddVideo=({addVideos,updateVideo,editableVideo})=>{
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
        if(editableVideo){

        updateVideo(video)
        
        }
        else{
            addVideos(video)
        }
       
        setVideo(initialState)
    }
    useEffect(()=>{
        if(editableVideo){setVideo(editableVideo)}

    },[editableVideo])
    return(
        <div>
            <form>
                <input type="text" name='title' value={video.title} placeholder='title' onChange={handleChange}/>
                <input type="text" name='views' value={video.views} placeholder='views' onChange={handleChange}/>
                <button  onClick={handleSubmit}> {editableVideo? 'Edit':'Add' }</button>
            </form>
        </div>
    )
}
export default AddVideo;