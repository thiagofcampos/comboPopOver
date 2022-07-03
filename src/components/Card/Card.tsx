import React from "react";
import CardView from "./CardView";

interface Props {
  children: React.ReactNode;
}

const Card = ({ children }: Props) => {
  return <CardView>{children}</CardView>;
};

export default Card;
