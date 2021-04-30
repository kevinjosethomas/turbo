import { FC } from "react";

import { TabProps } from "../lib/types";
import Toolbar from "../components/browser/toolbar/Toolbar";
import Titlebar from "../components/browser/titlebar/Titlebar";

interface BrowserProps {
  tablist: TabProps[];
  activeTab: TabProps | undefined;
}

const Browser: FC<BrowserProps> = (props) => {
  return (
    <div className="flex flex-col w-full h-28 bg-back-10">
      <Titlebar tablist={props.tablist} />
      <Toolbar activeTab={props.activeTab} />
    </div>
  );
};

export default Browser;
