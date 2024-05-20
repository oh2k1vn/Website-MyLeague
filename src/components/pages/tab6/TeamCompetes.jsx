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
    <div className="w-full mx-auto p-4 mt-4">
      <table className="min-w-full bg-white border border-gray-300 rounded overflow-hidden shadow">
        <thead>
          <tr className="*:bg-[#c7c7c7] *:px-4 *:py-3 *:border *:border-gray-300 text-[#59637b]">
            <th className="">#</th>
            <th>Tên đội</th>
            <th>Số trận</th>
            <th>T-H-B</th>
            <th>Số bàn ghi được</th>
            <th>Số bàn thua</th>
            <th>Hiệu số</th>
            <th>Thẻ vàng</th>
            <th>Thẻ đỏ</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr
              key={team.id}
              className="hover:bg-gray-100 *:border-b border-gray-300 *:py-3 *:px-4 *:text-center"
            >
              <td>{team.id}</td>
              <td className="flex justify-start text-green">{team.name}</td>
              <td>{team.played}</td>
              <td>{`${team.won}-${team.drawn}-${team.lost}`}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.yellowCards}</td>
              <td>{team.redCards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamCompetes;
