import React from "react";

function Invalid() {

  const onTest = (e) => {
    fetch("http://127.0.0.1:8000/L_demand",{
      method:'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:"data"
    }).then((result) => {
      console.log("result", result);
    }).catch((err) => {
      console.log("error", err);
    })
   }

  return(
    <>
    <input type="text"></input><br/><br/>
    <input type="text"></input><br/><br/>
    <input type="text"></input><br/><br/>
    <button onClick={onTest}>send</button>
    </>
  );
}

export default Invalid;
