import React from "react";

const PredictionArea = ({ predictionValue }) => {
  return (
    <div
      className={"prediction-area" + (predictionValue? " prediction-enabled": "")}
    >
      <p>The Predicted house price is:</p>
      <div className="prediction">
        R$ {predictionValue ? predictionValue.toFixed(2) : "0,00"}
      </div>
    </div>
  );
};

export default PredictionArea;
