import { FC } from "react";

import TabProps from "../../../../interface/Tab";

interface TabsProps {
  tablist: TabProps[];
}

const Tabs: FC<TabsProps> = (props) => {
  console.log(props.tablist);
  return (
    <div className="flex flex-row items-center justify-start h-full">
      <div className="flex flex-row itemss-center justify-center h-full">
        {props.tablist.map((tab: TabProps) => (
          <Tab
            key={tab.id}
            id={tab.id}
            url={tab.url}
            title={tab.title}
            friendlyUrl={tab.friendlyUrl}
          />
        ))}
      </div>
      <NewTab />
    </div>
  );
};

const Tab: FC<TabProps> = (props) => {
  return (
    <div>
      <span>{props.url}</span>
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
