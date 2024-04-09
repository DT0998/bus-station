"use client";
import React, { useContext } from "react";
import useCounterStore from "../../store/count";
import { CounterContext } from "../../context/count";

export default function DashboardPage() {
  // const { counter, increaseCount } = useCounterStore();
  const { counter, increaseCount } = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1 className="my-4 p-3 text-3xl font-bold underline">
        Counter client side
        <p>{counter} people</p>
        <button onClick={increaseCount}>increase me</button>
      </h1>
    </React.Fragment>
  );
}
