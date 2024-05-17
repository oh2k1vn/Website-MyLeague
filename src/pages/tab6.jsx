import React from "react";
const initialTeams = [
  {
    name: "Team A",
    matches: 10,
    record: "6-2-2",
    goalsFor: 20,
    goalsAgainst: 10,
    ownGoals: 1,
    yellowCards: 3,
    redCards: 1,
  },
  {
    name: "Team B",
    matches: 12,
    record: "8-1-3",
    goalsFor: 25,
    goalsAgainst: 15,
    ownGoals: 0,
    yellowCards: 5,
    redCards: 0,
  },
];

const columns = [
  { id: "name", label: "Tên đội" },
  { id: "matches", label: "Số trận" },
  { id: "record", label: "T - H - B" },
  { id: "goalsFor", label: "Số bàn ghi được" },
  { id: "goalsAgainst", label: "Số bàn thua" },
  { id: "ownGoals", label: "Phản lưới nhà" },
  { id: "yellowCards", label: "Thẻ vàng" },
  { id: "redCards", label: "Thẻ đỏ" },
];

const Statistical = () => {
  const [teams, setTeams] = React.useState(initialTeams);
  const [hiddenColumns, setHiddenColumns] = React.useState([]);
  const [filterTeam, setSearchQuery] = React.useState("");
  const [showColTable, setShowColTable] = React.useState(false);

  const handleFilterTeam = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleToggleColumn = (columnId) => {
    setHiddenColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((col) => col !== columnId)
        : [...prev, columnId]
    );
  };

  const visibleColumnsLength = React.useMemo(() => {
    return columns.filter((column) => !hiddenColumns.includes(column.id))
      .length;
  }, [hiddenColumns]);

  return (
    <>
      <div className="flex items-center gap-6 mb-6">
        <div>
          <select value={filterTeam} onChange={handleFilterTeam}>
            <option value="">All teams</option>

            {initialTeams.map((col) => (
              <option key={col.name} value={col.name}>
                {" "}
                {col.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowColTable(!showColTable)}
          >
            Hiển thị {visibleColumnsLength} cột
          </button>
          {showColTable && (
            <div
              onClick={() => setShowColTable(false)}
              className="fixed inset-0 z-10"
            ></div>
          )}
          {showColTable && (
            <div className="bg-white w-60 h-56 pb-4 overflow-y-auto rounded flex flex-col gap-2 absolute top-10 shadow divide-y z-20">
              {columns.map((col) => (
                <label
                  key={col.id}
                  className="flex justify-between items-center pt-2 px-4"
                >
                  {col.label}
                  <input
                    type="checkbox"
                    className="size-4"
                    checked={!hiddenColumns.includes(col.id)}
                    onChange={() => handleToggleColumn(col.id)}
                  />
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse bg-white">
        <thead>
          <tr>
            <th className="bg-[#c7c7c7] w-[50px] px-[15px] py-[14px] ">#</th>
            {columns.map(
              (col) =>
                !hiddenColumns.includes(col.id) && (
                  <th className="bg-[#c7c7c7] px-[15px] py-14px] " key={col.id}>
                    {col.label}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.name}
              className={`border-b ${
                index % 2 === 0 ? "bg-white" : "bg-[#f3f3f3]"
              } `}
            >
              <td className="px-[15px] py-[10px] text-center">{index + 1}</td>
              {columns.map(
                (col) =>
                  !hiddenColumns.includes(col.id) && (
                    <td
                      className={`px-[15px] py-[14px] text-center`}
                      key={col.id}
                    >
                      {team[col.id]}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Statistical;
