"use client";
import React, { createContext, useState } from "react";

interface ICounterContext {
  children: React.ReactNode;
}

interface ICounterContextValue {
  counter: number;
  increaseCount: () => void;
}

export const CounterContext = createContext<ICounterContextValue>({
  counter: 1,
  increaseCount: () => {},
});

// Create a provider component to provide the context value
export const CounterProvider = (props: ICounterContext) => {
  const { children } = props;
  const [counter, setCounter] = useState(1);

  // Function to increase count
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  // Context value
  const contextValue = {
    counter,
    increaseCount,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};
