import { useState } from "react";

const HeaderComponent=()=>{
    const[name,setName] =useState("")
    const [gender,setGender]=useState("")
    const[ele, setEle]=useState([{}])
    function handleClick()
    {
        setEle([...ele,{name,gender}])
    }
    console.log(ele)
    return(
        <div className="container"> 
          <input type="texr" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <input type="text" value={gender} onChange={(e)=>{setGender(e.target.value)}}/>
          <button type="button" onClick={handleClick}>add</button>
          {ele.map((item,index)=>{
                return (<ul key={index}>
               
                    <div>{item.name}</div>
                {item.gender==="female" ?  <div style={{color:"red"}}>{item.gender}</div>:<div style={{color:"blue"}}>{item.gender}</div>}
                </ul>)
            })}

        </div>
    )

}
export default HeaderComponent;