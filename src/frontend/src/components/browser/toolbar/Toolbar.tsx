import { FC } from "react";

import Controls from "./components/Controls";

const Toolbar: FC = () => {
  return (
    <div className="flex flex-row items-center justify-start px-4 w-full h-18 bg-back-20 border-t-2 border-back-30">
      <Controls />
    </div>
  );
};

export default Toolbar;
