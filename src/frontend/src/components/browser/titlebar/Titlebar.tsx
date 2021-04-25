import { FC } from "react";

import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Actions from "./components/Actions";

const Titlebar: FC = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-full h-12">
      <div className="flex flex-row items-center justify-center space-x-4">
        <Search />
        <Tabs />
      </div>
      <Actions />
    </div>
  );
};

export default Titlebar;
