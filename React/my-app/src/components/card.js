import React from "react";

export default function Box(props){
  const styles = {backgroundColor: props.on? '#222222' : "transparent"}
     
  return (
    <div className="BOX" id={props.id} style={styles} onClick={()=>props.handleToggle(props.id)}></div>
  )
}