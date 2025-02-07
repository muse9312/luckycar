"use client";
import React from "react";

type Props = {};

const CustomButton = (props: Props) => {
  return (
    <button
      type="button"
      disabled={false}
      className="custom-btn"
      onClick={() => {}}
    >
      <span className="flex-1">title</span>
    </button>
  );
};

export default CustomButton;
