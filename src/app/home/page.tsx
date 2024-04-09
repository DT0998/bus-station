'use server';
import React, { useContext } from "react";
import useCounterStore from "../../store/count";
import { CounterContext } from "../../context/count";

export default async function Page() {
  const { counter } = useContext(CounterContext);
  return (
    <React.Fragment>
      <h1 className="my-4 p-3 text-3xl font-bold underline">
        Counter server synced with client
        <p>{counter} people</p>
      </h1>
    </React.Fragment>
  );
}
