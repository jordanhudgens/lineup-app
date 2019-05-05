import * as React from "react";
import PlayerCard from "./PlayerCard";

interface ITeamCardProps {
  name: string;
}

const TeamCard = (props: ITeamCardProps) => {
  const players = [
    { id: "1", name: "Jon Snow", number: "4", data: [".123", ".748"] },
    { id: "2", name: "Jon Snow", number: "6", data: [".500", ".123"] }
  ];

  const playerList = () => {
    if (players.length > 0) {
      return players.map(player => {
        return <PlayerCard key={player.id} player={player} />;
      });
    }
  };

  return (
    <div>
      <div>{props.name}</div>
      <div>{playerList()}</div>
    </div>
  );
};

export default TeamCard;
