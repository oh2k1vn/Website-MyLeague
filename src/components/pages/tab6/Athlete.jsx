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
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Vận động viên</th>
            <th className="px-4 py-2 border border-gray-300">Số áo</th>
            <th className="px-4 py-2 border border-gray-300">Đội thi đấu</th>
            <th className="px-4 py-2 border border-gray-300">
              Số bàn ghi được
            </th>
            <th className="px-4 py-2 border border-gray-300">Phản lưới nhà</th>
            <th className="px-4 py-2 border border-gray-300">Thẻ vàng</th>
            <th className="px-4 py-2 border border-gray-300">Thẻ đỏ</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border border-gray-300">{player.id}</td>
              <td className="px-4 py-2 border border-gray-300 flex items-center">
                <img
                  src={player.imgSrc}
                  alt={player.name}
                  className="w-10 h-10 rounded-full mr-2"
                />
                {player.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {player.shirtNumber}
              </td>
              <td className="px-4 py-2 border border-gray-300 flex items-center">
                <img
                  src={player.teamLogo}
                  alt={player.team}
                  className="w-6 h-6 mr-2"
                />
                {player.team}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {player.goals}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {player.ownGoals}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {player.yellowCards}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {player.redCards}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Athlete;
