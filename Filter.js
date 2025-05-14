import React from "react";

const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        min="0"
        max="10"
        value={filterRate}
        onChange={(e) => setFilterRate(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
