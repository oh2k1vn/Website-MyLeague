import { Home } from "../components/Home";
import { LOGO_IMAGE } from "../mockData";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#231f20] pb-10">
      <div
        className="h-[92vh] bg-gray-700 bg-cover relative flex gap-5 "
        style={{
          backgroundImage:
            "url(https://wallpapers.com/images/hd/cristiano-ronaldo-cr7-nike-uoeeyk3ouu4lehye.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex-1 text-center">
          <img
            src={LOGO_IMAGE}
            alt=""
            className="h-20 w-auto hover:rotate-6 transition-all cursor-pointer mt-[60%] mx-auto"
          />
        </div>
        <div className="w-[80%] flex flex-col justify-center h-full">
          <Home />
        </div>
      </div>
    </div>
  );
};
