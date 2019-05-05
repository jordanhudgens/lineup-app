import * as React from "react";

interface IPlayerCardProps {
  player: {
    name: string;
    position: string;
    data: Array<string>;
  };
}

const PlayerCard = (props: IPlayerCardProps) => {
  const dataRenderer = () => {
    if (props.player.data.length > 0) {
      return props.player.data.map(el => {
        return <div>{el}</div>;
      });
    } else {
      return null;
    }
  };

  return (
    <div>
      <div>{props.player.name}</div>
      <div>{dataRenderer()}</div>
    </div>
  );
};

export default PlayerCard;
