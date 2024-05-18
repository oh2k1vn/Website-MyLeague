/* eslint-disable react/prop-types */
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

export default ButtonAnimate;
