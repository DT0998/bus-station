import classes from "./Loading.module.css";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <svg
        height="100"
        stroke="#bac736"
        strokeWidth="2"
        className="text_line h-20 text-green-400" viewBox="0 0 500 200"
        width="100%"
      >
        <text x="0" y="100" className="font-sans font-normal" font-size="80px">
          Miniso
        </text>
      </svg>
    </div>
  );
}

export default Loading;
