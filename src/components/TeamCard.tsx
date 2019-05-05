import * as React from "react";
import PlayerCard from "./PlayerCard";

interface ITeamCardProps {
  name: string;
}

const TeamCard = (props: ITeamCardProps) => {
  const batters = [
    { id: "1", name: "SOGARD", position: "4", data: [".500", ".400"] },
    { id: "2", name: "URENA", position: "6", data: [".571", ".235"] },
    { id: "3", name: "GRICHUK", position: "9", data: [".250", ".197"] },
    { id: "4", name: "SMOAK", position: "3", data: [".286", ".326"] },
    { id: "5", name: "TELLEZ", position: "DH", data: [".125", ".261"] },
    { id: "6", name: "DRURY", position: "5", data: [".182", ".204"] },
    { id: "7", name: "MCKINNEY", position: "7", data: [".250", ".245"] },
    { id: "8", name: "BRITO", position: "8", data: [".000", ".045"] },
    { id: "9", name: "MAILE", position: "2", data: [".083", ".286"] }
  ];

  const benchPlayers = [
    { id: "10", name: "HERNANDEZ", data: [".350", ".182"] },
    { id: "11", name: "HANSON", data: [".273", ".071"] },
    { id: "12", name: "GALVIS", data: [".333", ".306"] },
    { id: "13", name: "JANSEN", data: [".417", ".114"] }
  ];

  const startingPitcher = {
    id: "14",
    name: "THORNTON",
    data: [".282", ".242"]
  };

  const batterList = () => {
    if (batters.length > 0) {
      return batters.map(batter => {
        return <PlayerCard key={batter.id} player={batter} />;
      });
    }
  };

  const benchList = () => {
    if (benchPlayers.length > 0) {
      return benchPlayers.map(benchPlayer => {
        return <PlayerCard key={benchPlayer.id} player={benchPlayer} />;
      });
    }
  };

  return (
    <div>
      <div>{props.name}</div>

      <div>
        <div>5/4/19</div>
      </div>

      <div>{batterList()}</div>

      <div>{benchList()}</div>

      <div>
        <PlayerCard player={startingPitcher} />
      </div>
    </div>
  );
};

export default TeamCard;
