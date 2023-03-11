// "e" is event object that contain all the information about our current event
// Note:-"value"(it  will consider as prop value) is "read only" which means we can just read it(we can`t edit or add it ).....
//...to solve this "read only" problem we are useing "onchange" event handler which takes  a function and inside this funtion..
//...we have to write console.log(e.target.value) to make it write new information
// Note:we are using  "onChange={(e)=>{setMyinput(e.target.value)" just to come over the "read only" problem   

import React, { useState } from 'react'
import {css} from "./App.css"
export default function App() {

  const[myinput,setMyinput]=useState("");               // this "state" will take the data and update it 
  const[listData,setlistData]=useState([]);              // this "state" is used to store data 

// <-----------------------------------------add btn function------------------------------------------------->
  let funBtn=()=>{
    setlistData([...listData,myinput]);
    // here "listDate" is storing all the past data and "myinput" storing present data which going to be added in "listData"
console.log(listData);
setMyinput("");  // this line will remove the input old value


  }

// <-----------------------------------------removeAll btn function------------------------------------------------->

  function removeAll(){
    setlistData([])
  }
// <-----------------------------------------remove one btn function------------------------------------------------->

  function removeData(i){
    const updatedListData=listData.filter((elem,id)=>{
      return i!==id;
    })
setlistData(updatedListData)
  }

  return (
   <>
    <div className='container'>
    <div className='card'>
      <h1>ToDo App </h1>
      <input id='myinput' placeholder='enter your task' value={myinput} onChange={(e)=>{setMyinput(e.target.value); }} />
      <button id='btn' onClick={funBtn}> Add ToDo</button>
      <p className='list-heading'>My ToDo List</p>
      {listData!==[] && listData.map((data,i)=>{
        return(
          <>
          <ul key={i}>
            <li>{data}</li>
            <button id='btn2' onClick={()=>removeData(i)}>remove</button>
          </ul>
        </>
        )
      })}
      {listData.length>=1&& <button  id='btn1' onClick={removeAll}>remove All</button> }
    </div>

    </div>
   </>
  )
}
