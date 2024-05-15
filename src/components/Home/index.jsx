import { CountUpHome } from "./CountUpHome";

export const Home = () => {
  return (
    <>
      <p className=" font-bold text-4xl text-white">
        Tổ chức giải đấu dễ dàng
        <br /> Quản lý đội thể thao đơn giản!
      </p>

      <div className="grid grid-cols-2 gap-6 mt-7 w-fit font-semibold">
        <button
          className="text-white transition-all duration-300 py-[.28rem] px-5 rounded-full w-fit"
          style={{
            backgroundColor: "#11ba55",
            backgroundImage:
              "linear-gradient(to right top, #45af2a, #3ba023, #30901c, #268215, #1b730d, #1b730d, #1b730d, #1b730d, #268215, #30901c, #3ba023, #45af2a)",
          }}
        >
          Tạo giải đấu
        </button>
        <button className="bg-black text-white hover:bg-yellow-600 transition-all duration-300 py-[.28rem] px-5 rounded-full w-fit">
          Tìm giải đấu
        </button>
        <button className="bg-black text-white hover:bg-yellow-600 transition-all duration-300 py-[.28rem] px-5 rounded-full w-fit">
          Tạo đội hình
        </button>
        <button
          className="text-white transition-all duration-300 py-[.28rem] px-5 rounded-full w-fit"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #9467c1, #8c69c2, #846ac2, #7b6cc2, #736dc2, #736dc2, #736dc2, #736dc2, #7c6cc2, #846ac2, #8d69c2, #9567c1)",
          }}
        >
          Quản lý đội
        </button>
      </div>

      <div className="flex gap-16 mt-16 animate-fade-down animate-once">
        <CountUpHome title="Giải đấu" number={43969} />
        <CountUpHome title="Đội thi đấu" number={230030} />
        <CountUpHome title="Vận động viên" number={1092705} />
        <CountUpHome title="Trận đấu" number={1492435} />
      </div>
    </>
  );
};
