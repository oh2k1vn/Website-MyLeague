/* eslint-disable react/prop-types */
import { LOGO_IMAGE } from "../../mockData";
import { Link, useLocation } from "react-router-dom";

const menuHeader = [
  {
    id: 0,
    title: "tin chung",
    link: "/",
  },
  {
    id: 1,
    title: "Vòng bảng",
    link: "/tab2",
  },
  {
    id: 2,
    title: "Vòng loại trực tiếp",
    link: "/tab3",
  },
  {
    id: 3,
    title: "Bảng xếp hạng",
    link: "/tab4",
  },
  {
    id: 4,
    title: "Đội thi đấu",
    link: "/tab5",
  },
  {
    id: 4,
    title: "Thông kê",
    link: "/tab6",
  },
  {
    id: 5,
    title: "Bình chọn",
    link: "/tab7",
  },
];

export const Banner = () => {
  const pathname = useLocation();

  return (
    <div className="bg-[#16191e] w-full text-[#f5f5f5] pt-4">
      <div className="container max-w-[1170px] mx-auto">
        <div className=" flex gap-2 items-center container">
          <img src={LOGO_IMAGE} alt="" className="h-24" />
          <div className="flex flex-col gap-2 items-start">
            <p className="text-lg">VINASA Football Championship 2024</p>
            <p className="text-[#9b9b9b]">
              Chia Bảng Đấu ║ Bóng Đá Sân 7 ║ ║ Sân Bóng Thành Phát, Đường Hoàng
              Minh Giám, Trung Hoà, Cầu Giấy, Hà Nội, Việt Nam
            </p>
            <div className="text-white text-sm font-medium flex items-center gap-4 mt-2">
              <div className="flex gap-2 items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M24 14.6c0 .6-1.2 1-2.6 1.2c-.9-1.7-2.7-3-4.8-3.9c.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5M6.8 11H6c-3.1 0-6 1.9-6 3.6c0 .6 1.2 1 2.6 1.2c.9-1.7 2.7-3 4.8-3.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4s-4 1.8-4 4s1.8 4 4 4m0 1c-4.1 0-8 2.6-8 5c0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5m5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3c.8 1 1.3 2.3 1.3 3.7c0 .7-.1 1.4-.3 2M6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4C4.3 4 3 5.3 3 7s1.3 3 3 3"
                  />
                </svg>
                <p>32 đội</p>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  viewBox="0 0 36 36"
                >
                  <path
                    fill="currentColor"
                    d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47l.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48Zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43"
                    className="clr-i-solid clr-i-solid-path-1"
                  />
                  <circle
                    cx="18.09"
                    cy="18.03"
                    r="6.86"
                    fill="currentColor"
                    className="clr-i-solid clr-i-solid-path-2"
                  />
                  <path fill="none" d="M0 0h36v36H0z" />
                </svg>
                <p>12439 lượt xem</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-8 p-1 rounded-full border border-[#f5f5f5] text-primary"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-12 text-base font-semibold mt-6 pb-2">
          {menuHeader.map((item) => (
            <Link key={item.id} to={item.link}>
              <li
                className={`${
                  pathname.pathname == item.link
                    ? "text-green before:absolute before:size-3 before:top-0 before:bg-gray-200 before:rotate-45 before:left-1/2 before:-translate-x-1/2 before:translate-y-7"
                    : "text-[#5a6172]"
                } hover:text-green transition-all duration-500 cursor-pointer uppercase relative  `}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
