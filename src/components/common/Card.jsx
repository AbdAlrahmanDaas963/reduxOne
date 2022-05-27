import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/index";

function Card({ counter, num }) {
  const dispatch = useDispatch();

  return (
    <div className="card" style={{ width: " 30rem" }}>
      <div className="card-body">
        <h5 className="card-title">Chicken</h5>
        <p className="card-text">
          Some quick example text to build on the card title
        </p>
        <p className="card-text">$5.78</p>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button
            onClick={() => dispatch(decrement(num))}
            type="button"
            className="btn btn-secondary"
          >
            -
          </button>
          <button type="button" className="btn btn-secondary">
            {counter.id}
          </button>
          <button
            onClick={() => {
              dispatch(increment(num));
              console.log("counter.id", counter.id);
            }}
            type="button"
            className="btn btn-secondary"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
