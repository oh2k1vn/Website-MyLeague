const teams = [
  {
    id: 1,
    name: "CPTI Network FC",
    played: 3,
    won: 1,
    drawn: 0,
    lost: 2,
    goalsFor: 6,
    goalsAgainst: 7,
    goalDifference: -1,
    yellowCards: 0,
    redCards: 0,
    points: 3,
    matchHistory: ["W", "L", "L"],
  },
  {
    id: 2,
    name: "CTN",
    played: 7,
    won: 7,
    drawn: 0,
    lost: 0,
    goalsFor: 32,
    goalsAgainst: 2,
    goalDifference: 30,
    yellowCards: 0,
    redCards: 0,
    points: 21,
    matchHistory: ["W", "W", "W", "W", "W", "W", "W"],
  },
  {
    id: 3,
    name: "Co-well Asia FC",
    played: 3,
    won: 2,
    drawn: 1,
    lost: 0,
    goalsFor: 9,
    goalsAgainst: 2,
    goalDifference: 7,
    yellowCards: 0,
    redCards: 0,
    points: 7,
    matchHistory: ["W", "D", "W"],
  },
];

const TeamCompetes = () => {
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Tên đội</th>
            <th className="px-4 py-2 border border-gray-300">Số trận</th>
            <th className="px-4 py-2 border border-gray-300">T-H-B</th>
            <th className="px-4 py-2 border border-gray-300">
              Số bàn ghi được
            </th>
            <th className="px-4 py-2 border border-gray-300">Số bàn thua</th>
            <th className="px-4 py-2 border border-gray-300">Hiệu số</th>
            <th className="px-4 py-2 border border-gray-300">Thẻ vàng</th>
            <th className="px-4 py-2 border border-gray-300">Thẻ đỏ</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">{team.id}</td>
              <td className="px-4 py-2 border border-gray-300">{team.name}</td>
              <td className="px-4 py-2 border border-gray-300">
                {team.played}
              </td>
              <td className="px-4 py-2 border border-gray-300">{`${team.won}-${team.drawn}-${team.lost}`}</td>
              <td className="px-4 py-2 border border-gray-300">
                {team.goalsFor}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {team.goalsAgainst}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {team.goalDifference}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {team.yellowCards}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {team.redCards}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamCompetes;
