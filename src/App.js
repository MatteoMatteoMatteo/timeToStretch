import './App.css';
import classNames from 'classnames';
import { Fragment, useState, useEffect } from 'react';
import * as Tone from "tone"
import song1 from "./Assets/song1.mp3";
import song2 from "./Assets/song2.mp3";
import song3 from "./Assets/song3.mp3";
import song4 from "./Assets/song4.mp3";
import song5 from "./Assets/song5.mp3";
import song6 from "./Assets/song6.mp3";
import song7 from "./Assets/song7.mp3";
import song8 from "./Assets/song8.mp3";

function App() {
  const liClasses = classNames(
    'button'
  );

  

  const songArray=[1,2,3,4,5,6,7,8,9]
  const [buffer, setBuffer] = useState(true);
  const [date, setDate] = useState();
  const [stretch, setStretch] = useState();
  const [letsGo, setLetsGo] = useState(false);
  const [song, setSong] = useState(false);

  const handleAll = () => {

  setLetsGo(true);
  // handleClock()
  handleStretch()
  handleAudio()
  } 

  const helper = (id) => {
    if(id==1){
      return song1
    }
    if(id==2){
      return song2
    }
    if(id==3){
      return song3
    }
    if(id==4){
      return song4
    }
    if(id==5){
      return song5
    }
    if(id==6){
      return song6
    }
    if(id==7){
      return song7
    }
    if(id==8){
      return song8
    }
  }

  const handleAudio = () => {
    Tone.start()
    setTimeout(()=>{

      var ohoh=false
      setInterval(()=>{


          if(new Date().getMinutes()==19 && !ohoh){
            var item = songArray[Math.floor(Math.random() * songArray.length)]
            var player=new Tone.Player({url:helper(item)}).toMaster();
            setSong(true)
            player.autostart=true;
            ohoh=true
          }else if(new Date().getMinutes()==1 && player.state==="stopped" && ohoh){
            setSong(false)
            ohoh=false
          }
      },1000)},0)
  }

  const handleStretch = () => {
    var timeUntil = 59-new Date().getMinutes()
    setStretch(()=>timeUntil)


    setInterval(()=>{
      var timeUntil = 59-new Date().getMinutes()
      setStretch(()=>timeUntil)
    },1000)

  }

  const handleClock = () => {
      var currentdate = new Date(); 
      var datetime = 
                      currentdate.getHours() + ":"  
                      + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds();
      setDate(()=>datetime)
      setInterval(()=>{
        var currentdate = new Date(); 
        var datetime = 
                        currentdate.getHours() + ":"  
                        + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes()  + ":" 
                        + currentdate.getSeconds();
        setDate(()=>datetime)
      },1000)
    }


  return (
    buffer?(    
    <div className="App">
    <div className="item">TIME TO STRETCH</div>
    <div className="item" style={{fontSize:"1.3rem", fontStyle:"italic", padding:"5px"}}>every full hour</div>
  
    {letsGo?(

    song?
    <Fragment>
    <div className="until" style={{marginBottom:"35px", marginTop:"50px"}}>Let's Stretch!</div>
    <iframe src="https://giphy.com/embed/60wLzllpJn15e" width="430" height="310" style={{pointerEvents:"none"}} frameBorder="0"  allowFullScreen></iframe><p><a href="https://giphy.com/gifs/stretching-xhDniL1GXz43u"></a></p>
    </Fragment>
    :
    <Fragment>
    <div className="until"> <span style={{color:"#5cdb95"}}>{stretch}</span> min to next Stretch!</div>
    {/* <div className="time">Time: {date}</div> */}
    </Fragment>)

    :
    <button onClick={()=>{handleAll()
    }} className={liClasses}>START<br></br> ROUTINE</button>}


  </div>):(<div className="loading">SONGS FOR STRETCHING ARE LOADING...</div>)

  );
}

export default App;
