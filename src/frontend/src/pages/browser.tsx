import { FC } from "react";

import Toolbar from "../components/browser/toolbar/Toolbar";
import Titlebar from "../components/browser/titlebar/Titlebar";

const Browser: FC = () => {
  return (
    <div className="flex flex-col w-full h-28 bg-back-10">
      <Titlebar />
      <Toolbar />
    </div>
  );
};

export default Browser;
