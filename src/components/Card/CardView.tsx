import React from "react";
import "./style.css";

interface Props {
  children: React.ReactNode;
}

const CardView = ({ children }: Props) => {
  return <div className="Card-container">{children}</div>;
};

export default CardView;
