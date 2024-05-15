import React from "react";
import { menuHeader } from "./mockData";

function App() {
  const [listMenu, setlistMenu] = React.useState(menuHeader);

  return (
    <div className="w-full h-screen bg-gray-200">
      {/* Header */}
      <div
        className=""
        style={{
          background:
            "linear-gradient(4deg, rgba(0,212,255,1) 0%, rgba(12,12,177,1) 50%, rgba(8,0,150,1) 100%)",
        }}
      >
        {/* logo */}
        <img
          src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Website-logo-1.png"
          alt=""
          className="h-16"
        />
      </div>

      {/* Header Bottom */}
      <ul className="bg-gray-900 text-white flex items-center justify-center gap-3 text-sm py-4">
        {listMenu.map((item) => (
          <li
            className="uppercase relative before:absolute before:size-4 before:top-0 before:bg-gray-200 before:rotate-45 before:left-1/2 before:-translate-x-1/2 before:translate-y-7"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>

      <div className="bg-gray-500 container mx-auto mt-4">Content</div>
    </div>
  );
}

export default App;
