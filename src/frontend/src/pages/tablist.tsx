import { FC } from "react";

import { TabProps } from "../lib/types";
import Tab from "../components/tablist/Tab";

interface TablistProps {
  tablist: TabProps[];
  setTablist: any;
  activeTab: TabProps | undefined;
}

const Tablist: FC<TablistProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-start w-100 h-100 bg-back-10 rounded-lg">
      <div className="flex flex-col items-start justify-center w-full p-4">
        <div className="flex flex-row items-center justify-start w-full px-4 py-3 space-x-2 bg-back-20 rounded-lg">
          <i className="far fa-search text-indigo-500" />
          <input
            className="bg-transparent focus:outline-none text-gray-400 placeholder-gray-500"
            placeholder="Search for tabs..."
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start w-full space-y-1">
        {props.tablist.map((tab) => (
          <Tab {...tab} />
        ))}
      </div>
    </div>
  );
};

export default Tablist;
