import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./../redux/actions/index";
import Card from "./common/Card";

import { data } from "./../Data";

function ListCards() {
  const counter = useSelector((state) => state.counter);
  const [state, setState] = useState(counter);
  console.log("state", state);
  console.log("counter", counter);

  console.log("data", data);
  console.log("filtered data :", data[0].id + 1);
  return (
    <div className="col-10">
      <Card counter={counter[0]} num={1} />
      <Card counter={counter[1]} num={2} />
      <Card counter={counter[2]} num={3} />
      <Card counter={counter[3]} num={4} />
      <Card counter={counter[4]} num={5} />
    </div>
  );
}

export default ListCards;
