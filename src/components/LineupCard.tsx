import * as React from "react";
import TeamCard from "./TeamCard";

// LineupCard
// score
// - 2 team cards
//   - date
//   - location
//   - 9 batters
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
