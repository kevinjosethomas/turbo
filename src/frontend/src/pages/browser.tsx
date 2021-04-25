import { FC } from "react";

import TabProps from "../interface/Tab";
import Toolbar from "../components/browser/toolbar/Toolbar";
import Titlebar from "../components/browser/titlebar/Titlebar";

interface BrowserProps {
  tablist: TabProps[];
}

const Browser: FC<BrowserProps> = (props) => {
  return (
    <div className="flex flex-col w-full h-28 bg-back-10">
      <Titlebar tablist={props.tablist} />
      <Toolbar />
    </div>
  );
};

export default Browser;
