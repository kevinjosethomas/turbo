import { FC } from "react";

import Tabs from "./components/Tabs";
import Actions from "./components/Actions";
import { TabProps } from "../../../lib/types";

interface TitlebarProps {
  tablist: TabProps[];
  setTablist: any;
}

const Titlebar: FC<TitlebarProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-full h-12 window-drag">
      <Tabs tablist={props.tablist} setTablist={props.setTablist} />
      <Actions />
    </div>
  );
};

export default Titlebar;
