import './App.css';
import classNames from 'classnames';
import { Fragment, useState } from 'react';

function App() {
  var liClasses = classNames(
  
    'button'
  );

  const [date, setDate] = useState();
  const [stretch, setStretch] = useState();
  const [letsGo, setLetsGo] = useState(false);


  const handleAll = () => {
  setLetsGo(true);
  handleClock()
  handleStretch()
  }

  const handleStretch = () => {
    var timeUntil = 60-new Date().getMinutes()
    setStretch(()=>timeUntil)
    
    console.log("hey")


    setInterval(()=>{
      var timeUntil = 60-new Date().getMinutes()
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
    <div className="App">
      <div className="item">TIME TO STRETCH</div>
      <div className="item" style={{fontSize:"1.3rem", fontStyle:"italic", padding:"5px"}}>every full hour</div>
    
      {letsGo?(
     <Fragment>
       <div className="until"> <span style={{color:"#5cdb95"}}>{stretch}</span> min to next Stretch!</div>
       {/* <div className="time">Time: {date}</div> */}
      </Fragment>
      ):<button onClick={()=>{handleAll()
      }} className={liClasses}>START<br></br> ROUTINE</button>}


    </div>
  );
}

export default App;
