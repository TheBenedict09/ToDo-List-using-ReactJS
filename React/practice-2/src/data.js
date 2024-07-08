import React from "react";
import Card from "./components/Card";
const data = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywkxJjbvz083HSYyo7cWXM-jGpA1xfReejg&s",
    country: "Georgia",
    place: "Nigeria",
    desc: "SKZg8fIKKUjGv5D1ercW",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywkxJjbvz083HSYyo7cWXM-jGpA1xfReejg&s",
    country: "Georgia",
    place: "Albania",
    desc: "SKZg8fIKKUjGv5D1ercW",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywkxJjbvz083HSYyo7cWXM-jGpA1xfReejg&s",
    country: "Georgia",
    place: "Sierra Leone",
    desc: "SKZg8fIKKUjGv5D1ercW",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywkxJjbvz083HSYyo7cWXM-jGpA1xfReejg&s",
    country: "Georgia",
    place: "Gambia",
    desc: "SKZg8fIKKUjGv5D1ercW",
  },
];

const dataSet = data.map((abs) => {
  return (
    <Card
      img={abs.img}
      country={abs.country}
      place={abs.place}
      desc={abs.desc}
    />
  );
});

export default dataSet;
