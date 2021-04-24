import { FC } from "react";

import Search from "./components/Search";
import Controls from "./components/Controls";

const Toolbar: FC = () => {
  return (
    <div className="flex flex-row items-center justify-start px-4 space-x-4 w-full h-18 bg-back-20 border-t-2 border-back-30">
      <Controls />
      <Search />
    </div>
  );
};

export default Toolbar;
