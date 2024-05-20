const players = [
  {
    id: 1,
    name: "DatMC",
    shirtNumber: 1,
    team: "USOLV",
    goals: 10,
    ownGoals: 0,
    yellowCards: 0,
    redCards: 0,
    imgSrc: "path/to/player1.jpg",
    teamLogo: "path/to/usolv_logo.png",
  },
  {
    id: 2,
    name: "HuyVQ",
    shirtNumber: 3,
    team: "CTIN",
    goals: 8,
    ownGoals: 0,
    yellowCards: 1,
    redCards: 0,
    imgSrc: "path/to/player2.jpg",
    teamLogo: "path/to/ctin_logo.png",
  },
  {
    id: 3,
    name: "Stringee FC",
    shirtNumber: 15,
    team: "Stringee FC",
    goals: 6,
    ownGoals: 0,
    yellowCards: 0,
    redCards: 0,
    imgSrc: "path/to/player3.jpg",
    teamLogo: "path/to/stringee_logo.png",
  },
  {
    id: 4,
    name: "Minh Quang",
    shirtNumber: 5,
    team: "Kaopiz",
    goals: 5,
    ownGoals: 0,
    yellowCards: 1,
    redCards: 0,
    imgSrc: "path/to/player4.jpg",
    teamLogo: "path/to/kaopiz_logo.png",
  },
  {
    id: 5,
    name: "ĐứcNP",
    shirtNumber: 28,
    team: "CTIN",
    goals: 5,
    ownGoals: 0,
    yellowCards: 0,
    redCards: 0,
    imgSrc: "path/to/player5.jpg",
    teamLogo: "path/to/ctin_logo.png",
  },
  {
    id: 6,
    name: "Tân Nguyễn",
    shirtNumber: 31,
    team: "LIFESUP",
    goals: 5,
    ownGoals: 0,
    yellowCards: 0,
    redCards: 0,
    imgSrc: "path/to/player6.jpg",
    teamLogo: "path/to/lifesup_logo.png",
  },
  {
    id: 7,
    name: "Trọng Quyết",
    shirtNumber: 6,
    team: "Kaopiz",
    goals: 4,
    ownGoals: 0,
    yellowCards: 3,
    redCards: 0,
    imgSrc: "path/to/player7.jpg",
    teamLogo: "path/to/kaopiz_logo.png",
  },
  // Add more players as per your data
];

const Athlete = () => {
  return (
    <div className="mx-auto p-4 mt-4">
      <table className="min-w-full bg-white border border-gray-300 rounded overflow-hidden shadow">
        <thead>
          <tr className="*:bg-[#c7c7c7] *:px-4 *:py-3 *:border *:border-gray-300 text-[#59637b]">
            <th>#</th>
            <th>Vận động viên</th>
            <th>Số áo</th>
            <th>Đội thi đấu</th>
            <th>Số bàn ghi được</th>
            <th>Phản lưới nhà</th>
            <th>Thẻ vàng</th>
            <th>Thẻ đỏ</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
          {players.map((player) => (
            <tr
              key={player.id}
              className="cursor-pointer odd:bg-white even:bg-[#f3f3f3] hover:bg-[#e0e0e0]  *:py-3 *:px-4 *:text-center"
            >
              <td>{player.id}</td>
              <td className="flex items-center text-green">{player.name}</td>
              <td>{player.shirtNumber}</td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
              <td>{player.ownGoals}</td>
              <td>{player.yellowCards}</td>
              <td>{player.redCards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Athlete;
