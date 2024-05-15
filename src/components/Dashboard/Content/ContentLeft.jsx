export const ContentLeft = (data) => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <section>
        <div className="flex flex-col gap-4">
          {data.data.map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <img src={item.icon} alt="" className="size-6" />
              <span className="font-semibold mr-4">{item.cup}:</span>
              {item.logo && <img src={item.logo} alt="" className="size-6" />}
              {item.text}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <span className="text-green-600 text-lg cursor-pointer">
            Top ghi bàn
          </span>
          <span className="text-base flex items-center cursor-pointer hover:text-green-600">
            Thống kê
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
              />
            </svg>
          </span>
        </div>

        <div className="flex justify-around items-center text-center mt-4">
          {[1, 2, 3].map((item, index) => (
            <div key={index}>
              <img
                src="https://i.pinimg.com/736x/f9/cd/3e/f9cd3e2c03813d1cfdfee37b8ede036c.jpg"
                alt=""
                className="size-16 rounded-full"
              />
              <span>Demo</span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-[#9467c1] group py-1 flex justify-center items-center gap-2 text-white rounded cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 group-hover:scale-150 transition-all duration-300"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 14.154q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.539t-.54.23M12 18q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T12 18m-4 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T8 18m8 0q-.31 0-.54-.23t-.23-.54t.23-.539t.54-.23t.54.23t.23.54t-.23.54T16 18M5.615 21q-.69 0-1.152-.462T4 19.385V6.615q0-.69.463-1.152T5.615 5h1.77V2.77h1.077V5h7.153V2.77h1V5h1.77q.69 0 1.152.463T20 6.615v12.77q0 .69-.462 1.152T18.385 21zm0-1h12.77q.23 0 .423-.192t.192-.423v-8.77H5v8.77q0 .23.192.423t.423.192"
          />
        </svg>
        Toàn bộ lịch thi đấu
      </div>

      <section>
        <p className="text-sm uppercase mb-2 font-semibold">Top dẫn đầu</p>
        <div className="bg-white shadow rounded py-2">
          <table className="w-full text-sm ">
            <tbody className="">
              {data.topDanDau.map((item, index) => (
                <tr className="*:p-3" key={index}>
                  <td className="text-center text-[#596377]">{item.stt}</td>
                  <td className="text-left text-green-600 flex items-center gap-2 uppercase">
                    {item.logo && (
                      <img src={item.logo} alt="" className="size-5" />
                    )}
                    {item.name}
                  </td>
                  <td className="text-right font-semibold text-[#596377]">
                    {item.point} điểm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="flex items-center px-3 text-sm text-primary hover:text-green-600 cursor-pointer transition-all duration-300">
            Xem toàn bộ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
              />
            </svg>
          </p>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase mb-2 font-semibold">Vòng 1</p>

        <div className="py-4 bg-white shadow flex flex-col gap-4">
          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">NTQ FC</div>
            <div className="grid-cols-2 text-center text-primary">4 - 1</div>
            <div className="grid-cols-5 text-left">MK GROUP</div>
          </div>

          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">CO-WELL ASIA FC</div>
            <div className="grid-cols-2 text-center text-primary">2 - 1</div>
            <div className="grid-cols-5 text-left">LIFESUP</div>
          </div>

          <p className="flex items-center px-3 text-sm text-primary hover:text-green-600 cursor-pointer transition-all duration-300">
            Xem toàn bộ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
              />
            </svg>
          </p>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase mb-2 font-semibold">Vòng 2</p>

        <div className="py-4 bg-white shadow flex flex-col gap-4">
          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">CO-WELL ASIA FC</div>
            <div className="grid-cols-2 text-center text-primary">1 - 1</div>
            <div className="grid-cols-5 text-left">NTQ FC</div>
          </div>

          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">LIFESUP</div>
            <div className="grid-cols-2 text-center text-primary">3 - 0</div>
            <div className="grid-cols-5 text-left">MK GROUP</div>
          </div>

          <p className="flex items-center px-3 text-sm text-primary hover:text-green-600 cursor-pointer transition-all duration-300">
            Xem toàn bộ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
              />
            </svg>
          </p>
        </div>
      </section>

      <section>
        <p className="text-sm uppercase mb-2 font-semibold">Vòng 3</p>

        <div className="py-4 bg-white shadow flex flex-col gap-4">
          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">CO-WELL ASIA FC</div>
            <div className="grid-cols-2 text-center text-primary">3 - 1</div>
            <div className="grid-cols-5 text-left">MK GROUP</div>
          </div>

          <div className="grid grid-cols-3 text-green-600 text-sm">
            <div className="grid-cols-5 text-right">CO-WELL ASIA FC</div>
            <div className="grid-cols-2 text-center text-primary">2 - 1</div>
            <div className="grid-cols-5 text-left">LIFESUP</div>
          </div>

          <p className="flex items-center px-3 text-sm text-primary hover:text-green-600 cursor-pointer transition-all duration-300">
            Xem toàn bộ{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z"
              />
            </svg>
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 text-lg mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-green-600"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12"
            />
          </svg>
          <span>Địa điểm tổ chức</span>
        </div>
      </section>
    </div>
  );
};
