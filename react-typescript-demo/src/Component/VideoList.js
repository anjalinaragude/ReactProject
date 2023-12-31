import PlayButton from "./PlayButton";
import Video from "./Video";

const VideoList=({videos})=>{
    return(
<div>
{videos.map((item,index)=>{
        return(
          <Video key={index}  id={item?.id} title={item?.title}
          views={item?.views}
          time={item?.time}
          channel={item?.channel}
          verified={item?.verified} 
          
          > <PlayButton 
          onPlay={()=>console.log("playing",item.title)} 
          onPause={()=>console.log("paused..",item.title)} >
           {item?.title}
             </PlayButton>
             </Video>
            
          
        )
      })}
</div>
    )
}
export default VideoList;