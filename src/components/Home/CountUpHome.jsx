/* eslint-disable react/prop-types */
import CountUp from "react-countup";

export const CountUpHome = (props) => {
  const { title, number } = props;
  return (
    <div className="text-center w-[180px] inline-flex flex-col gap-2">
      <div className="py-[.5px] bg-white text-black text-base font-medium rounded">
        {title}
      </div>
      <div className="text-white text-4xl font-semibold ">
        <CountUp duration={3} className="counter" end={number} />
      </div>
    </div>
  );
};
