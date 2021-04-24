import { FC } from "react";

import Search from "./components/Search";
import Actions from "./components/Actions";

const Titlebar: FC = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-full h-12">
      <Search />
      <Actions />
    </div>
  );
};

export default Titlebar;
