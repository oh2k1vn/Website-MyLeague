import { TEAMS } from "../mocks/teams";

const CompetitionTeam = () => {
  return (
    <div className="page">
      <div className="flex justify-between items-center">
        <p>Có 32 đội và 563 người chơi tham gia giải</p>
        <div className="bg-[#4d90fe] rounded text-white px-3 py-1 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 20h14q.425 0 .713.288T20 21t-.288.713T19 22H5q-.425 0-.712-.288T4 21t.288-.712T5 20m7-2.625q-.225 0-.437-.1t-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1"
            />
          </svg>
          Danh sách
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-8">
        {TEAMS.map((item, index) => (
          <div
            key={index}
            className="w-full rounded bg-white shadow-sm shadow-[#d8d8d8] flex flex-col gap-4 text-center group cursor-pointer py-4 "
          >
            <img src={item.logo} alt="" className="size-28 mx-auto " />
            <p className="text-[#3bbf1a] text-base ">{item.name}</p>
            <div className="flex flex-col gap-3  border-t border-b border-dashed py-4 relative">
              <p>{item.matchPlayed} Trận đã chơi</p>

              <div className="flex justify-center items-center gap-2">
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#79c753] text-white">
                  {item.win} thắng
                </span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#676ec1] text-white">
                  {item.draw} hòa
                </span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-[#dd4132] text-white">
                  {item.lose} thua
                </span>
              </div>

              <span
                style={{
                  background: "#00cd1a",
                  backgroundImage:
                    "linear-gradient(270deg, #00ff0c, #00f22c, #00e53c, #00d846, #00cb4e, #00c577, #00bc94, #00b2a4, #00a8ca, #0097f4, #007bff, #8441eb)",
                }}
                className="ease absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
              ></span>
            </div>
            <div>
              <p>Thành viên</p>

              <div className="flex justify-center items-center mt-4 gap-3">
                <div className="size-10 rounded-full border"></div>
                <div className="size-10 rounded-full border"></div>
                <div className="size-10 rounded-full border"></div>
                <div className="size-10 rounded-full border"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CompetitionTeam;
