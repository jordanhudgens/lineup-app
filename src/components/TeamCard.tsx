import * as React from "react";

interface ITeamCardProps {
  name: string;
}

const TeamCard = (props: ITeamCardProps) => {
  return <div>{props.name}</div>;
};

export default TeamCard;
