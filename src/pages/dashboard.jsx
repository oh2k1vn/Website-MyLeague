import { Banner, Content } from "../components/Dashboard";
import { menuHeader } from "../mockData";

export const DashboardPage = () => {
  return (
    <div className="pb-10">
      <Banner data={menuHeader} />
      <Content />
    </div>
  );
};
