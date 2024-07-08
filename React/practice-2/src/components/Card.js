import React from "react";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="classPic"/>
      <div className="details">
        <div className="location">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/485/579/original/map-pointer-icon-location-png.png"
            width="14px"
          />
          <h4>{props.country}</h4>
        </div>
        <h1>{props.place}</h1>
        <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
        <div className="desc">{props.desc}</div>
      </div>
      <vr></vr>
    </div>
  );
}
