import { FC } from "react";

const Tabs: FC = () => {
  return (
    <div className="flex flex-row items-center justify-start h-full">
      <NewTab />
    </div>
  );
};

const NewTab: FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-8 h-8 text-fore-10 hover:text-fore-20 hover:bg-back-30 rounded transition duration-500"
      onClick={window.ipc.tab.emitters.new}
    >
      <i className="far fa-plus" />
    </div>
  );
};

export default Tabs;
