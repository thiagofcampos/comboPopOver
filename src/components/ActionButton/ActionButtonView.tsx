import React from "react";
import Dot from "../../assets/Icon/Dot";
import Card from "../Card";
import { ActionButtonProps } from "./ActionButton.types";
import { useGetUniqueKey } from "react-generate-unique-key-for-map";
import "./style.css";

interface Props extends ActionButtonProps {
  showCard: boolean;
  onClick: () => void;
  popoverDirection?: "left" | "right";
}

const ActionButtonView = ({
  onClick,
  showCard,
  list,
  popoverDirection = "left",
}: Props) => {
  const getUniqueKey = useGetUniqueKey();
  return (
    <div className="Action-button-wrapper">
      <div className="Action-button-container" onClick={() => onClick()}>
        <Dot />
      </div>
      {showCard && (
        <div className={`Action-button-card-${popoverDirection}`}>
          <Card>
            {list?.map((item) => {
              return (
                <div
                  className="Action-button-card-items"
                  key={getUniqueKey(item)}
                >
                  {item.type === "text" ? (
                    <div onClick={() => item.callback()}>{item.value}</div>
                  ) : (
                    <a href={item.url}>{item.text}</a>
                  )}
                </div>
              );
            })}
          </Card>
        </div>
      )}
    </div>
  );
};

export default ActionButtonView;
