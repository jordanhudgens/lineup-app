import * as React from "react";

interface IPlayerCardProps {
  name: string;
  data: Array<string>;
}

const PlayerCard = (props: IPlayerCardProps) => {
  const dataRenderer = () => {
    if (props.data.length > 0) {
      return props.data.map(el => {
        return <div>{el}</div>;
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <div>{props.name}</div>
      <div>{dataRenderer()}</div>
    </div>
  );
};

export default PlayerCard;
