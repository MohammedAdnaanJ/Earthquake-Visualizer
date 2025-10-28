import React from "react";
import Button from "./Button";

const Filter = ({ selected, setSelected }) => {
  const showAll = () => {
    setSelected("ALL");
  };

  const aboveThree = () => {
    setSelected("3");
  };

  const aboveFive = () => {
    setSelected("5");
  };

  return (
    <div className="flex justify-center gap-3 bg-gray-100 py-3 border-b border-gray-300">
      <Button onClick={showAll} selected={selected} label="All" />

      <Button onClick={aboveThree} selected={selected} label="Mag > 3" />

      <Button onClick={aboveFive} selected={selected} label="Mag > 5" />
    </div>
  );
};

export default Filter;
