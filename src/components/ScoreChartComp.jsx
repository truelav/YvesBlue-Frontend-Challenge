import React from "react";

export default function ScoreChartComp({ val }) {
  const chartColor = val / 100;
  const chartWidth = Math.floor(val);
  return (
    <div className="ScoreChartComp">
      <div
        className="scoreChart"
        style={{
          width: chartWidth,
          height: 25,
          backgroundColor: `rgba(0, 27, 66, ${chartColor})`,
        }}
      ></div>
    </div>
  );
}
