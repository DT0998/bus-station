import React from "react";
import useCount from "../../store/count";

function HomePage() {
  return (
    <React.Fragment>
      <h1 className="my-4 p-3 text-3xl font-bold underline">
        Articles server synced with client
        <p>{useCount.getState().count} people</p>
        {/* <button onClick={increaseCount}>increase me</button> */}
      </h1>
    </React.Fragment>
  );
}
export default HomePage;
