import { Link } from "react-router-dom";
import { LOGO_IMAGE } from "../../mockData";

export const Header = () => {
  return (
    <div
      className="px-6 sticky top-0 left-0 w-full flex justify-between items-center z-10"
      style={{
        backgroundColor: "#3bbf1a",
        backgroundImage:
          "linear-gradient(to right top, #45af2a, #3ba023, #30901c, #268215, #1b730d, #1b730d, #1b730d, #1b730d, #268215, #30901c, #3ba023, #45af2a)",
      }}
    >
      {/* logo */}
      <Link to="/">
        <img
          src={LOGO_IMAGE}
          alt=""
          className="h-16 hover:rotate-6 transition-all cursor-pointer"
        />
      </Link>

      <div className="*:font-normal text-white flex items-center gap-5">
        <Link to="/" className="hover:text-[#ba9dec] cursor-pointer">
          Trang chủ
        </Link>
        <Link to="/dashboard" className="hover:text-[#ba9dec] cursor-pointer">
          Giải đấu
        </Link>
        <Link to="/dashboard" className="hover:text-[#ba9dec] cursor-pointer">
          Đội thi đấu
        </Link>
        <Link to="/dashboard" className="hover:text-[#ba9dec] cursor-pointer">
          Bảng giá
        </Link>
        <Link to="/dashboard" className="hover:text-[#ba9dec] cursor-pointer">
          Đăng nhập
        </Link>
        <span
          className="text-white px-4 py-1 rounded cursor-pointer"
          style={{
            backgroundImage:
              "linear-gradient(to right top, #9467c1, #8c69c2, #846ac2, #7b6cc2, #736dc2, #736dc2, #736dc2, #736dc2, #7c6cc2, #846ac2, #8d69c2, #9567c1)",
          }}
        >
          Đăng ký
        </span>
      </div>
    </div>
  );
};
