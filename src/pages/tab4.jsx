/* eslint-disable react/prop-types */
import { useState } from "react";
import ButtonAnimate from "../components/ButtonAnimate";
import Tab from "../components/Tab";
import TopRound from "../components/pages/tab4/TopRound";
import KnockoutRound from "../components/pages/tab4/KnockoutRound";

const Charts = () => {
  const [indexTab, setIndexTab] = useState(0);

  return (
    <div className="page">
      <div className="flex justify-end items-center">
        <div>
          <div className="flex gap-1">
            <Tab text="t" />
            <Tab text="h" />
            <Tab text="b" />
            <p className="text-[#9b9b9b]">= Thắng - Hòa - Bại</p>
          </div>
          <p className="text-[#9b9b9b] text-base">Quy tắc xếp hạng</p>
        </div>
      </div>

      <div className="border-b border-gray-300 pb-1 flex gap-16 justify-center items-center mt-6 w-full">
        <ButtonAnimate
          title="Vòng đấu bảng"
          index={0}
          active={indexTab}
          onClick={() => setIndexTab(0)}
        />
        <ButtonAnimate
          title="Vòng loại trực tiếp"
          index={1}
          active={indexTab}
          onClick={() => setIndexTab(1)}
        />
      </div>

      {indexTab == 0 ? <TopRound /> : <KnockoutRound />}
    </div>
  );
};
export default Charts;
