/* eslint-disable react/prop-types */

const Tab = ({ text }) => {
  return (
    <div
      className={`size-5 uppercase flex justify-center items-center font-semibold text-white p-1 rounded ${
        text == "t" && "bg-[#598cff]"
      } ${text == "h" && "bg-[#4fc1e9]"} ${text == "b" && "bg-[#6f6f6f]"}`}
    >
      {text}
    </div>
  );
};
export default Tab;
