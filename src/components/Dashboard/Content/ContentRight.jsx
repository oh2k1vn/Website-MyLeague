export const ContentRight = (data) => {
  return (
    <div className="flex flex-col gap-6 w-[65%]">
      <section>
        <img
          src="https://media.licdn.com/dms/image/C5112AQErnMljR1ceUw/article-cover_image-shrink_600_2000/0/1520103659973?e=2147483647&v=beta&t=-koEAsYnKX_jC7G9HZncOUerl0BTy5a_ikWd5d6vgdE"
          className="rounded"
          alt=""
        />
      </section>

      <section>
        <div className="flex items-center gap-2 text-lg mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-green-600"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h8v-64a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v64h16V88a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v112h16V40a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8v160h8a8 8 0 0 1 8 8"
            />
          </svg>
          <span>Thống kê tổng quát</span>
        </div>
        <div className="grid grid-cols-5 grid-rows-4 gap-2">
          <div className=" bg-red-500 row-span-2"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className=" bg-red-500 col-span-2"></div>
          <div className=" bg-red-500 col-span-2">1</div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
          <div className="h-28 bg-red-500"></div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 text-lg mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-green-600"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z"
            />
            <path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z" />
          </svg>
          <span>Giới thiệu về giải đấu</span>
        </div>
        <div
          className=" px-6 py-4 border border-[#ccc] rounded bg-white shadow  "
          dangerouslySetInnerHTML={{
            __html: data.data,
          }}
        ></div>
      </section>
    </div>
  );
};
