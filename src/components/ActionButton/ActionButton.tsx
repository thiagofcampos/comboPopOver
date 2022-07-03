import React from "react";
import ActionButtonView from "./ActionButtonView";
import { ActionButtonProps } from "./ActionButton.types";

interface Props extends ActionButtonProps {
  popoverDirection?: "left" | "right";
}

const ActionButton = ({ popoverDirection, list }: Props) => {
  const [showCard, setShowCard] = React.useState(false);

  const handleShowCard = () => {
    setShowCard(!showCard);
  };

  return (
    <ActionButtonView
      showCard={showCard}
      onClick={handleShowCard}
      popoverDirection={popoverDirection}
      list={list}
    />
  );
};

export default ActionButton;
