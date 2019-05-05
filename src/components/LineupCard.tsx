import * as React from "react";
import TeamCard from "./TeamCard";

// LineupCard
// score
// x 2 team cards
//   x date
//   x location
//   x 9 batters
//     - uses the player card component
//   x Bench
//     - bench players
//       - uses the player card component
//   - current pitcher
//     - uses the player card component
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
