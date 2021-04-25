import { FC } from "react";

import Toolbar from "../components/browser/toolbar/Toolbar";
import Titlebar from "../components/browser/titlebar/Titlebar";

interface BrowserProps {
  tablist: object[];
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
