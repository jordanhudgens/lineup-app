import * as React from "react";
import PlayerCard from "./PlayerCard";

interface ITeamCardProps {
  name: string;
}

const TeamCard = (props: ITeamCardProps) => {
  const batters = [
    {
      id: "1",
      name: "SOGARD",
      position: "4",
      data: [".500", ".400"],
      hand: "RIGHT"
    },
    {
      id: "2",
      name: "URENA",
      position: "6",
      data: [".571", ".235"],
      hand: "SWITCH"
    },
    {
      id: "3",
      name: "GRICHUK",
      position: "9",
      data: [".250", ".197"],
      hand: "LEFT"
    },
    {
      id: "4",
      name: "SMOAK",
      position: "3",
      data: [".286", ".326"],
      hand: "SWITCH"
    },
    {
      id: "5",
      name: "TELLEZ",
      position: "DH",
      data: [".125", ".261"],
      hand: "LEFT"
    },
    {
      id: "6",
      name: "DRURY",
      position: "5",
      data: [".182", ".204"],
      hand: "LEFT"
    },
    {
      id: "7",
      name: "MCKINNEY",
      position: "7",
      data: [".250", ".245"],
      hand: "RIGHT"
    },
    {
      id: "8",
      name: "BRITO",
      position: "8",
      data: [".000", ".045"],
      hand: "RIGHT"
    },
    {
      id: "9",
      name: "MAILE",
      position: "2",
      data: [".083", ".286"],
      hand: "LEFT"
    }
  ];

  const benchPlayers = [
    { id: "10", name: "HERNANDEZ", data: [".350", ".182"], hand: "LEFT" },
    { id: "11", name: "HANSON", data: [".273", ".071"], hand: "SWITCH" },
    { id: "12", name: "GALVIS", data: [".333", ".306"], hand: "SWITCH" },
    { id: "13", name: "JANSEN", data: [".417", ".114"], hand: "LEFT" }
  ];

  const startingPitcher = {
    id: "14",
    name: "THORNTON",
    data: [".282", ".242"],
    hand: "LEFT"
  };

  const bullpenPitchers = [
    { id: "15", name: "SMITH", data: [".000", ".190"], hand: "RIGHT" },
    { id: "16", name: "WATSON", data: [".333", ".235"], hand: "LEFT" },
    { id: "17", name: "BERGEN", data: [".333", ".235"], hand: "LEFT" },
    { id: "18", name: "MORONTA", data: [".333", ".235"], hand: "LEFT" },
    { id: "19", name: "VINCENT", data: [".333", ".235"], hand: "LEFT" },
    { id: "20", name: "GOTT", data: [".333", ".235"], hand: "LEFT" },
    { id: "21", name: "MELANCON", data: [".333", ".235"], hand: "LEFT" },
    { id: "22", name: "dyson", data: [".333", ".235"], hand: "LEFT" }
  ];

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

  const bullpentList = () => {
    if (bullpenPitchers.length > 0) {
      return bullpenPitchers.map(bullpenPitcher => {
        return <PlayerCard key={bullpenPitcher.id} player={bullpenPitcher} />;
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

      <div>{bullpentList()}</div>
    </div>
  );
};

export default TeamCard;
