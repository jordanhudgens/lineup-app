import * as React from "react";
import PlayerCard from "./PlayerCard";

interface ITeamCardProps {
  name: string;
}

const TeamCard = (props: ITeamCardProps) => {
  return (
    <div>
      <div>{props.name}</div>
      <PlayerCard name={"Jon Snow"} data={[".500", ".400"]} />
      <PlayerCard name={"Jon Snow 2"} data={[".123", ".748"]} />
      <PlayerCard name={"Jon Snow 3"} data={[".500", ".400"]} />
      <PlayerCard name={"Jon Snow 4"} data={[".123", ".748"]} />
      <PlayerCard name={"Jon Snow 5"} data={[".500", ".400"]} />
      <PlayerCard name={"Jon Snow 6"} data={[".123", ".748"]} />
      <PlayerCard name={"Jon Snow 7"} data={[".500", ".400"]} />
      <PlayerCard name={"Jon Snow 8"} data={[".123", ".748"]} />
      <PlayerCard name={"Jon Snow 9"} data={[".500", ".400"]} />
    </div>
  );
};

export default TeamCard;
