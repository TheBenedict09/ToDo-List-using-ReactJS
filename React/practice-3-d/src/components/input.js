import React from "react";
import memeData from "../memeData.js";

export default function Input() {
  var [topText, getTopText] = React.useState({
    FirstName: "",
    LastName: "",
    Email: "",
  });

  function update(event) {
    getTopText((oldText) => {
      return {
        ...oldText,
        [event.target.name]: event.target.value,
      };
    });
    console.log(topText);
  }

  var [meme, func] = React.useState({
    randomimage: "https://i.imgflip.com/30b1gx.jpg",
  });

  function onclick() {
    var memeArray = memeData.data.memes;
    var rand = Math.floor(Math.random() * memeArray.length);
    func(() => {
      return {
        // ...meme,
        randomimage: memeArray[rand].url,
      };
    });
  }

  return (
    <div className="input">
      <div>
        <input
          type="text"
          className="t1"
          placeholder="Top Text"
          onChange={update}
          name="FirstName"
        ></input>
        <input
          type="text"
          className="t2"
          placeholder="Bottom Text"
          onChange={update}
          name="LastName"
        ></input>
      </div>
      <button onClick={onclick}>Get a meme image 🖼️</button>
      <div className="imageSection">
        <img src={meme.randomimage} />
        <h1 className="topText">{topText.FirstName}</h1>
        <h1 className="bottomText">{topText.LastName}</h1>

      </div>
    </div>
  );
}
