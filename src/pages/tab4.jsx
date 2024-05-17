/* eslint-disable react/prop-types */
import Tab from "../components/Tab";

const Charts = () => {
  return (
    <>
      <div className="flex gap-1">
        <Tab text="t" />
        <Tab text="h" />
        <Tab text="b" />
        <p className="text-[#9b9b9b]">= Thắng - Hòa - Bại</p>
      </div>
      <p className="text-[#9b9b9b] text-base">Quy tắc xếp hạng</p>

      <div className="border-b border-gray-300 pb-1 flex gap-16 justify-center items-center mt-6 w-full">
        <ButtonAnimate title="Vòng đấu bảng" index={0} />
        <ButtonAnimate title="Vòng loại trực tiếp" index={1} />
      </div>
    </>
  );
};
export default Charts;

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
