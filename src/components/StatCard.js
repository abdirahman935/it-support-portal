// src/components/StatCard.js
import React from "react";

function StatCard({ title, value, type }) {
  return (
    <div className="stat-card">
      <h4>{title}</h4>
      <p className={`stat-number ${type}`}>{value}</p>
    </div>
  );
}

export default StatCard;
