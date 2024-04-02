"use client";
import React from "react";
import useCount from "../../store/count";

export default function DashboardPage() {
  const { count, increaseCount } = useCount();
  return (
    <React.Fragment>
      <h1 className="my-4 p-3 text-3xl font-bold underline">
        Articles client side
        <p>{count} people</p>
        <button onClick={increaseCount}>increase me</button>
      </h1>
    </React.Fragment>
  );
}
