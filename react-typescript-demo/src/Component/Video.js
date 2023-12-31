import './Video.css'
const Video=({title ,channel,views,time,verified,id,children})=>{
   
  console.log(verified)
//    let channelJXS;
//    if(verified){ channelJXS=<div className='channel'>{channel}✅</div>}
//    else{
//     channelJXS=<div className='channel'>{channel}</div>
//    }
    return(
        <div className='container'>
           
            <div className='pic'>
         <img src={`https://picsum.photos/id/${id}/160/90`} alt="video"/>
       
       </div>
        <div className="title">{title} </div>
        <div className='channel'>{channel} {verified &&"✅"}</div> 
       
        <div className='views'>{views} views <span>.</span>{time}</div>
        <div>{children}</div>
        </div>
    )
}
export default Video;