import { FC } from "react";

import Actions from "./components/Actions";

const Titlebar: FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-10">
      <div />
      <Actions />
    </div>
  );
};

export default Titlebar;
