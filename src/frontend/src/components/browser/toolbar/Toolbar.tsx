import { FC } from "react";

import Search from "./components/Search";
import Controls from "./components/Controls";
import { TabProps } from "../../../lib/types";

interface ToolbarProps {
  activeTab: TabProps | undefined;
}

const Toolbar: FC<ToolbarProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-start px-4 space-x-4 w-full h-16 bg-back-20 border-t-2 border-back-30">
      <Controls />
      <Search activeTab={props.activeTab} />
    </div>
  );
};

export default Toolbar;
