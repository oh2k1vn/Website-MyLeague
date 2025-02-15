const TopRound = () => {
  const data = {
    tables: [
      {
        title: "BẢNG A",
        teams: [
          {
            position: 1,
            name: "Co-well Asia FC",
            matches: 3,
            record: "2-1-0",
            goalDifference: "6 / 3 (+3)",
            yellowRedCards: "3/0",
            points: 7,
            history: "THT",
          },
          {
            position: 2,
            name: "LIFESUP",
            matches: 3,
            record: "2-0-1",
            goalDifference: "7 / 4 (+3)",
            yellowRedCards: "1/0",
            points: 6,
            history: "TTB",
          },
          {
            position: 3,
            name: "NTQ FC",
            matches: 3,
            record: "1-1-1",
            goalDifference: "7 / 5 (+2)",
            yellowRedCards: "1/2",
            points: 4,
            history: "BHT",
          },
          {
            position: 4,
            name: "MK Group",
            matches: 3,
            record: "0-0-3",
            goalDifference: "2 / 10 (-8)",
            yellowRedCards: "0/0",
            points: 0,
            history: "BBB",
          },
        ],
      },
      {
        title: "BẢNG B",
        teams: [
          {
            position: 1,
            name: "USOLV",
            matches: 3,
            record: "2-1-0",
            goalDifference: "8 / 3 (+5)",
            yellowRedCards: "0/0",
            points: 7,
            history: "THT",
          },
          {
            position: 2,
            name: "Stringee FC",
            matches: 3,
            record: "2-0-1",
            goalDifference: "9 / 4 (+5)",
            yellowRedCards: "0/0",
            points: 6,
            history: "TTB",
          },
          {
            position: 3,
            name: "Fetch Tech",
            matches: 3,
            record: "1-1-1",
            goalDifference: "2 / 3 (-1)",
            yellowRedCards: "3/0",
            points: 4,
            history: "HTB",
          },
          {
            position: 4,
            name: "Vnext Software",
            matches: 3,
            record: "0-0-3",
            goalDifference: "2 / 11 (-9)",
            yellowRedCards: "0/0",
            points: 0,
            history: "BBB",
          },
        ],
      },
    ],
  };

  return (
    <div className="mt-12">
      <div className="overflow-x-auto">
        {data.tables.map((table, index) => (
          <div key={index} className="mb-8">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    colSpan="1"
                    className=" text-white py-2 text-left px-4 w-fit"
                    style={{
                      clipPath: "polygon(0 0, 75% 0, 100% 100%, 0% 100%)",
                      backgroundColor: "#796cc2",
                      backgroundImage:
                        "linear-gradient(to right top, #9467c1, #8c69c2, #846ac2, #7b6cc2, #736dc2, #736dc2, #736dc2, #736dc2, #7c6cc2, #846ac2, #8d69c2, #9567c1)",
                    }}
                  >
                    {table.title}
                  </th>
                </tr>
                <tr className="bg-[#c7e5ff] text-[#596377] border-b">
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Tên đội</th>
                  <th className="py-2 px-4">Số trận</th>
                  <th className="py-2 px-4">T-H-B</th>
                  <th className="py-2 px-4">Hiệu số</th>
                  <th className="py-2 px-4">V / P</th>
                  <th className="py-2 px-4">Điểm</th>
                  <th className="py-2 px-4">Lịch sử đấu</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {table.teams.map((team, index) => (
                  <tr
                    key={index}
                    className="border-b *:py-2 *:px-4 *:text-center"
                  >
                    <td>{team.position}</td>
                    <td className="flex justify-start text-[#1929bf] hover:text-green cursor-pointer capitalize">
                      {team.name}
                    </td>
                    <td>{team.matches}</td>
                    <td>{team.record}</td>
                    <td>{team.goalDifference}</td>
                    <td>{team.yellowRedCards}</td>
                    <td>{team.points}</td>
                    <td className="flex gap-1 items-center justify-center">
                      {team.history.split("").map(renderHistoryIcon)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRound;

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
