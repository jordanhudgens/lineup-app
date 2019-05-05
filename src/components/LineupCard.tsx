import * as React from "react";
import TeamCard from "./TeamCard";

// LineupCard
// score
// x 2 team cards
//   x date
//   x location
//   x 9 batters
//   - Bench
//     - bench players
//   - current pitcher
//   - bullpen
//     - pitcher
const LineupCard = () => {
  return (
    <div>
      <TeamCard name={"Toronto Blue Jays"} />
      <TeamCard name={"San Francisco Giants"} />
    </div>
  );
};

export default LineupCard;
