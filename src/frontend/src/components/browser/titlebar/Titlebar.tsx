import { FC } from "react";

import Tabs from "./components/Tabs";
import Actions from "./components/Actions";
import { TabProps } from "../../../lib/types";

interface TitlebarProps {
  tablist: TabProps[];
}

const Titlebar: FC<TitlebarProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-full h-12">
      <Tabs tablist={props.tablist} />
      <Actions />
    </div>
  );
};

export default Titlebar;
