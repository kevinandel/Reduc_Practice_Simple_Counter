import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice";

function ReviewComponent() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default ReviewComponent;
