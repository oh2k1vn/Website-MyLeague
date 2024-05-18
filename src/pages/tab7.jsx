import React from "react";

const Comment = () => {
  const [active, setActive] = React.useState(0);
  const [isSidebar, setIsSidebar] = React.useState(false);
  return (
    <div className="page flex rounded bg-white shadow overflow-hidden">
      <div
        className={` bg-[#596377] text-[#596377] py-4 transition-all duration-300 ${
          isSidebar ? "w-[4%]" : "w-[20%]"
        }`}
      >
        {listMenu.map((item, index) => (
          <div
            key={index}
            className={`flex px-4 py-3 gap-2 items-center text-white hover:bg-white/10 cursor-pointer transition-all duration-300 ${
              active == index && "bg-white text-inherit"
            }`}
            onClick={() => setActive(index)}
          >
            {item.icon}
            {!isSidebar && item.title}
          </div>
        ))}
      </div>
      <div className="flex-1">
        <p className="text-2xl text-center py-2 relative border-b border-gray-200">
          Đội vô địch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 absolute left-4 top-3 cursor-pointer"
            viewBox="0 0 256 256"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            <path
              fill="currentColor"
              d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"
            />
          </svg>
        </p>

        <div className="flex flex-col gap-4 p-4 pb-10">
          {listTeam.map((item) => (
            <div
              key={item.name}
              className="shadow p-1 rounded flex items-center gap-4 pr-5"
            >
              <img
                src={"/" + item.name + "." + item.format}
                alt=""
                className="size-16"
              />
              <span className="text-[15px] w-[15rem]">{item.name}</span>

              <div className="flex-1 mr-12">
                <div className="h-6 w-full bg-gray-200 rounded relative overflow-hidden">
                  <span
                    className="absolute h-6 bg-orange-500 rounded "
                    style={{
                      width: item.percent + "%",
                      backgroundColor: "#ffce99",
                      backgroundImage:
                        "linear-gradient(270deg, #e38117, #e68721, #e98c2a, #eb9233, #ee973b, #f09d46, #f3a450, #f5aa5a, #f8b36a, #fabc79, #fdc589, #ffce99)",
                    }}
                  ></span>

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    {item.percent} % ({item.number})
                  </span>
                </div>
              </div>

              <div className="px-3 py-1 rounded bg-indigo text-white">
                Bình chọn
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comment;

const listMenu = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Đội vô địch",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Đội chơi đẹp mắt nhất",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Người chơi xuất sắc nhất",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Vua phá lưới",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Tiền đạo xuất sắc nhất",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Tiền vệ xuất sắc nhất",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Hậu vệ xuất sắc nhất",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 21v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4 12.95q-1.875-.225-3.137-1.637T3 8V7q0-.825.588-1.412T5 5h2V3h10v2h2q.825 0 1.413.588T21 7v1q0 1.9-1.263 3.313T16.6 12.95q-.45 1.15-1.412 1.913T13 15.9V19h4v2zm0-10.2V7H5v1q0 .95.55 1.713T7 10.8m10 0q.9-.325 1.45-1.088T19 8V7h-2z"
        />
      </svg>
    ),
    title: "Thủ môn xuất sắc nhất",
  },
];

const listTeam = [
  {
    name: "MIGITEK",
    format: "png",
    percent: 28.57,
    number: 6,
  },
  {
    name: "DTS Việt Nam",
    format: "png",
    percent: 28.57,
    number: 6,
  },
  {
    name: "Savvycom FC",
    format: "png",
    percent: 23.81,
    number: 5,
  },
  {
    name: "LTS",
    format: "png",
    percent: 4.76,
    number: 1,
  },
  {
    name: "Stringee FC",
    format: "png",
    percent: 4.76,
    number: 1,
  },
  {
    name: "VDI FC",
    format: "png",
    percent: 4.76,
    number: 1,
  },
  {
    name: "CGVTelecom FC",
    format: "jpg",
    percent: 0,
    number: 0,
  },
  {
    name: "Co-well Asia FC",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "DTS Việt Nam",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "Dreamforce Vietnam",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "EVNICT",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "Elcom FC",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "Fetch Tech",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "GEM FC",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "Meey Group",
    format: "png",
    percent: 0,
    number: 0,
  },
  {
    name: "NTT e-MOI",
    format: "png",
    percent: 0,
    number: 0,
  },
];
