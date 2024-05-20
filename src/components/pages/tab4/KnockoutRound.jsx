const KnockoutRound = () => {
  const data = {
    table: {
      title: "BẢNG XẾP HẠNG",
      columns: [
        "#",
        "Tên đội",
        "Số trận",
        "T-H-B",
        "Hiệu số",
        "V / P",
        "Lịch sử đấu",
      ],
      teams: [
        {
          position: 1,
          name: "CTIN",
          matches: 4,
          record: "4-0-0",
          goalDifference: "12 / 4 (+8)",
          yellowRedCards: "2/0",
          history: "TTTT",
        },
        {
          position: 2,
          name: "Nam Việt FC",
          matches: 4,
          record: "3-0-1",
          goalDifference: "7 / 6 (+1)",
          yellowRedCards: "4/0",
          history: "TTBT",
        },
        {
          position: 3,
          name: "Kaopiz",
          matches: 4,
          record: "3-0-1",
          goalDifference: "10 / 6 (+4)",
          yellowRedCards: "9/0",
          history: "BBTT",
        },
        {
          position: 4,
          name: "Stringee FC",
          matches: 4,
          record: "2-0-2",
          goalDifference: "7 / 5 (+2)",
          yellowRedCards: "5/0",
          history: "BBTT",
        },
        {
          position: 5,
          name: "MIGITEK",
          matches: 2,
          record: "1-0-1",
          goalDifference: "6 / 1 (+5)",
          yellowRedCards: "2/0",
          history: "BT",
        },
        {
          position: 6,
          name: "Luvina FC",
          matches: 2,
          record: "1-0-1",
          goalDifference: "1 / 3 (-2)",
          yellowRedCards: "1/0",
          history: "BT",
        },
        {
          position: 7,
          name: "Savvycom FC",
          matches: 2,
          record: "1-0-1",
          goalDifference: "4 / 3 (+1)",
          yellowRedCards: "2/0",
          history: "BT",
        },
        {
          position: 8,
          name: "USOLV",
          matches: 2,
          record: "1-0-1",
          goalDifference: "8 / 5 (+3)",
          yellowRedCards: "3/0",
          history: "BTT",
        },
        {
          position: 9,
          name: "Meey Group",
          matches: 1,
          record: "0-0-1",
          goalDifference: "0 / 6 (-6)",
          yellowRedCards: "0/0",
          history: "B",
        },
        {
          position: 10,
          name: "Newwave Solutions FC",
          matches: 1,
          record: "0-0-1",
          goalDifference: "1 / 8 (-7)",
          yellowRedCards: "0/0",
          history: "B",
        },
        {
          position: 11,
          name: "iNET Domain FC",
          matches: 1,
          record: "0-0-1",
          goalDifference: "3 / 4 (-1)",
          yellowRedCards: "0/0",
          history: "B",
        },
        {
          position: 12,
          name: "Co-well Asia FC",
          matches: 1,
          record: "0-0-1",
          goalDifference: "0 / 1 (-1)",
          yellowRedCards: "1/0",
          history: "B",
        },
        {
          position: 13,
          name: "EVNICT",
          matches: 1,
          record: "0-0-1",
          goalDifference: "0 / 0 (0)",
          yellowRedCards: "1/0",
          history: "B",
        },
      ],
    },
  };
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#c7e5ff] text-[#596377] border-b ">
              {data.table.columns.map((column, index) => (
                <th key={index} className="py-2 px-4 font-bold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.table.teams.map((team, index) => (
              <tr key={index} className="border-b *:text-center">
                <td>{team.position}</td>
                <td className="py-2 px-4 flex items-center">
                  <img
                    src={getTeamLogo(team.name)}
                    alt={`${team.name} logo`}
                    className="w-6 h-6 mr-2"
                  />
                  {team.name}
                </td>
                <td>{team.matches}</td>
                <td>{team.record}</td>
                <td>{team.goalDifference}</td>
                <td>{team.yellowRedCards}</td>
                <td className="py-2 px-4 flex gap-1 justify-center">
                  {team.history.split("").map(renderHistoryIcon)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getTeamLogo = (teamName) => {
  // Replace with actual paths to team logos
  const logos = {
    CTIN: "/CTIN.png",
    Kaopiz: "/kaopiz-logo.png",
    "Stringee FC": "/stringee-logo.png",
    MIGITEK: "/MIGITEK.png",
    "Luvina FC": "/luvina-logo.png",
    "Savvycom FC": "/Savvycom FC.png",
    USOLV: "/USOLV.png",
    "Meey Group": "/Meey Group.png",
    "Newwave Solutions FC": "/newwave-solutions-logo.png",
    "iNET Domain FC": "/iNET Domain FC.png",
    "Co-well Asia FC": "/Co-well Asia FC.png",
    EVNICT: "/EVNICT.png",
  };
  return logos[teamName] || "/CGVTelecom FC.png";
};

const renderHistoryIcon = (matchResult, index) => {
  const iconClass =
    matchResult === "T"
      ? "bg-[#598cff]"
      : matchResult === "H"
      ? "bg-[#4fc1e9]"
      : "bg-[#6f6f6f]";
  return (
    <span
      key={index}
      className={`size-5 rounded text-white font-semibold flex justify-center items-center ${iconClass}`}
    >
      {matchResult}
    </span>
  );
};

export default KnockoutRound;
