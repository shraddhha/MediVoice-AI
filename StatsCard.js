import React from "react";

const StatsCard = ({ title, value, subtitle }) => {
  return (
    <div style={{border: "1px solid #ccc", padding: "10px", borderRadius: "10px"}}>
      <h3>{title}</h3>
      <h1>{value}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default StatsCard;
