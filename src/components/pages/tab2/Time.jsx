const Time = () => {
  const scheduleData = {
    schedule: [
      {
        date: "06/04/2024",
        matches: [
          {
            league: "SingA",
            teams: ["TECHVIFY FC", "TOONG FC"],
            score: "3 - 1",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["NYTFC", "Meey Group"],
            score: "2 - 2",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["ECOM FC", "BAU HOOG HOLDINGS (NHON 3) SAU1"],
            score: "1 - 4",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["Luvina FC", "Dreamforce Vietnam"],
            score: "2 - 2",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["PAGOM", "Savvycom FC"],
            score: "3 - 3",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["Kaopiz", "FPT Services"],
            score: "2 - 1",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["Nam Việt FC", "VOV FC"],
            score: "2 - 0",
            time: "08:30",
          },
          {
            league: "SingA",
            teams: ["iNET Domain FC", "Thinh Vuong FC"],
            score: "2 - 1",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["USOLV", "Vinet Software"],
            score: "3 - 3",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["Co-well Asia FC", "LFSUP"],
            score: "2 - 2",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["254-Solutions", "CTIN"],
            score: "1 - 3",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["GemX", "Newwave Solutions FC"],
            score: "2 - 1",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["Meey Group", "HFT NTN Emobi"],
            score: "0 - 0",
            time: "09:30",
          },
          {
            league: "SingA",
            teams: ["Ftech Tech", "Stringee FC"],
            score: "1 - 2",
            time: "10:30",
          },
          {
            league: "SingA",
            teams: ["ITS", "MIGITEK"],
            score: "2 - 1",
            time: "10:30",
          },
          {
            league: "SingA",
            teams: ["EVNICT", "CoToTelecom FC"],
            score: "0 - 3",
            time: "10:30",
          },
        ],
      },
      {
        date: "07/04/2024",
        matches: [
          {
            league: "SingA",
            teams: ["Vinet Software", "Ftech Tech"],
            score: "3 - 1",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["Luvina FC", "Nam Việt FC"],
            score: "3 - 3",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["USOLV", "Stringee FC"],
            score: "2 - 2",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["MIGITEK", "Thinh Vuong FC"],
            score: "2 - 0",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["254-Solutions", "TOONG FC"],
            score: "2 - 3",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["Dreamforce Vietnam", "VOV FC"],
            score: "4 - 1",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["CoToTelecom FC", "BAU HOOG HOLDINGS (NHON 3) SAU1"],
            score: "3 - 1",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["ECOM FC", "FPT Services"],
            score: "0 - 3",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["ITS", "FPT Services"],
            score: "0 - 2",
            time: "07:00",
          },
          {
            league: "SingA",
            teams: ["Meey Group", "Kaopiz"],
            score: "2 - 2",
            time: "08:00",
          },
          {
            league: "SingA",
            teams: ["iNET Domain FC", "NYTFC"],
            score: "1 - 2",
            time: "08:00",
          },
          {
            league: "SingA",
            teams: ["Newwave Solutions FC", "PAGOM"],
            score: "1 - 2",
            time: "08:00",
          },
          {
            league: "SingA",
            teams: ["Savvycom FC", "VOV FC"],
            score: "2 - 1",
            time: "08:00",
          },
          {
            league: "SingA",
            teams: ["CTIN", "TECHVIFY FC"],
            score: "2 - 3",
            time: "08:00",
          },
          {
            league: "SingA",
            teams: ["LFSUP", "Meey Group"],
            score: "3 - 0",
            time: "08:00",
          },
        ],
      },
    ],
  };
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        {scheduleData.schedule.map((daySchedule, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-center bg-[#676ec1] text-white py-2">
              {daySchedule.date}
            </h2>
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4">League</th>
                  <th className="py-2 px-4">Teams</th>
                  <th className="py-2 px-4">Score</th>
                  <th className="py-2 px-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {daySchedule.matches.map((match, matchIndex) => (
                  <tr key={matchIndex} className="border-b">
                    <td className="py-2 px-4">{match.league}</td>
                    <td className="py-2 px-4">{match.teams.join(" vs ")}</td>
                    <td className="py-2 px-4">{match.score}</td>
                    <td className="py-2 px-4">{match.time}</td>
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

export default Time;
