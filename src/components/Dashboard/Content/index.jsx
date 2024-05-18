import { ContentLeft } from "./ContentLeft";
import { ContentRight } from "./ContentRight";
4;
import { topRankCUP, contentHTML, TopDanDau } from "../../../mockData";

export const Content = () => {
  return (
    <div className="container max-w-[1170px] mx-auto mt-6 flex gap-5">
      <ContentLeft data={topRankCUP} topDanDau={TopDanDau} />
      <ContentRight data={contentHTML} />
    </div>
  );
};
