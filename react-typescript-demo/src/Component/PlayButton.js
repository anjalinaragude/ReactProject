 import { useState } from 'react';
import './PlayButton.css'
const PlayButton=({children,onPlay,onPause})=>{
    const [playing,setPlaying] =useState();
    const handleClick=()=>{
       if(playing){ onPause();} 
       else{ onPlay();}
       setPlaying(!playing)

    }
    return(
        <button onClick={handleClick}>{children}: {playing ?  "⏸️": "▶️"}</button>
    )
}
export default PlayButton;