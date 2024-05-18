/* eslint-disable react/prop-types */

import React from "react";
import Time from "../components/pages/tab2/Time";

const RoundTable = () => {
  const [activeTable, setActiveTable] = React.useState(0);
  return (
    <div className="page">
      <div>
        <p className="text-[14px]">
          <span className="font-bold mr-1 ">Giai đoạn đấu vòng bảng:</span> Có 8
          bảng đấu và 48 trận đấu.
        </p>
        <p className="text-[14px]">
          <span className="font-bold mr-1 ">Giai đoạn loại trực:</span>tiếp Có
          16 đội vượt qua vòng bảng và 16 trận đấu.
        </p>
      </div>

      <div className="border-b border-gray-300 pb-1 flex gap-16 justify-center items-center mt-6 w-full">
        <ButtonAnimate
          title="Bảng đấu"
          index={0}
          active={activeTable}
          onClick={() => setActiveTable(0)}
        />
        <ButtonAnimate
          title="Vòng đấu"
          index={1}
          active={activeTable}
          onClick={() => setActiveTable(1)}
        />
        <ButtonAnimate
          title="Thời gian"
          index={2}
          active={activeTable}
          onClick={() => setActiveTable(2)}
        />
      </div>

      {activeTable == 0 ? (
        <>
          <Table title="Bảng A" />
          <Table title="Bảng B" />
          <Table title="Bảng C" />
        </>
      ) : activeTable == 2 ? (
        <Time />
      ) : null}
    </div>
  );
};
export default RoundTable;

const ButtonAnimate = ({ title, index, onClick, active }) => {
  return (
    <div
      className={`relative group hover:text-green cursor-pointer text-[15px] transition-all duration-300 ${
        active === index && "text-green"
      }`}
      onClick={onClick}
    >
      {title}

      <span className="ease absolute -bottom-1 left-1/2 -translate-x-1/2 h-0 w-0 border-b-2 border-green transition-all duration-200 group-hover:w-full"></span>
      {active === index && (
        <span className="ease absolute -bottom-1 left-1/2 -translate-x-1/2 h-0 border-b-2 border-green transition-all duration-200 w-full"></span>
      )}
    </div>
  );
};

const Table = ({ title }) => {
  return (
    <div className="border border-indigo mt-16">
      <div className="py-3 bg-indigo text-white font-bold text-2xl text-center">
        {title}
      </div>
      {TableA.map((item, index) => (
        <div
          key={index}
          className={`relative flex items-center py-2 gap-10 justify-center ${
            index % 2 === 0 ? "bg-white/20" : "bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-2 justify-end flex-1">
            {item.name1}
            <img src={item.logo1} alt="" className="size-5" />
          </div>
          <div className="py-1 px-10 rounded-full bg-green text-violet-700 w-fit">
            {item.number}
          </div>
          <div className="flex items-center gap-2 justify-start flex-1">
            <img src={item.logo2} alt="" className="size-5" />
            {item.name2}
          </div>

          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
            {item.createAt}
          </span>

          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs flex gap-1 items-center">
            <span className="size-4 text-[11px] bg-gray-400 text-gray-200 rounded-full flex justify-center items-center">
              {item.bgRing}
            </span>
            Vòng {item.ring}
          </span>
        </div>
      ))}
    </div>
  );
};

const TableA = [
  {
    name1: "CGVTelecom FC",
    logo1: "/CGVTelecom FC.jpg",
    name2: "Đại học Công nghệ Đông Á (EAUT)",
    logo2: "/Đại học Công nghệ Đông Á (EAUT).png",
    number: "4 - 1",
    createAt: "123",
    ring: 1,
    bgRing: 1,
  },
  {
    name1: "CGVTelecom FC",
    logo1: "/CGVTelecom FC.jpg",
    name2: "Đại học Công nghệ Đông Á (EAUT)",
    logo2: "/Đại học Công nghệ Đông Á (EAUT).png",
    number: "2 - 1",
    createAt: "",
    ring: 1,
    bgRing: 2,
  },
  {
    name1: "Dreamforce Vietnam",
    logo1: "/Dreamforce Vietnam.png",
    name2: "DTS Việt Nam",
    logo2: "/DTS Việt Nam.png",
    number: "2 - 1",
    createAt: "123",
    ring: 2,
    bgRing: 1,
  },
  {
    name1: "Dreamforce Vietnam",
    logo1: "/Dreamforce Vietnam.png",
    name2: "DTS Việt Nam",
    logo2: "/DTS Việt Nam.png",
    number: "1 - 1",
    createAt: "",
    ring: 2,
    bgRing: 2,
  },
  {
    name1: "Dreamforce Vietnam",
    logo1: "/Dreamforce Vietnam.png",
    name2: "DTS Việt Nam",
    logo2: "/DTS Việt Nam.png",
    number: "2 - 1",
    createAt: "123",
    ring: 3,
    bgRing: 1,
  },
  {
    name1: "Dreamforce Vietnam",
    logo1: "/Dreamforce Vietnam.png",
    name2: "DTS Việt Nam",
    logo2: "/DTS Việt Nam.png",
    number: "1 - 1",
    createAt: "",
    ring: 3,
    bgRing: 2,
  },
];
