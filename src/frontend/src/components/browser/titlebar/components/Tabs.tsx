import { FC } from "react";

import Search from "./Search";
import { TabProps } from "../../../../lib/types";
import LoadingFavicon from "../../../../assets/icons/browser/loading-favicon.gif";
import MissingFavicon from "../../../../assets/icons/browser/missing-favicon.svg";

interface TabsProps {
  tablist: TabProps[];
}

const Tabs: FC<TabsProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-start h-full space-x-4">
      <Search />
      <div className="flex flex-row itemss-center justify-center h-full">
        {props.tablist.map((tab: TabProps, index: number) => (
          <Tab
            key={tab.id}
            id={tab.id}
            url={tab.url}
            friendlyUrl={tab.friendlyUrl}
            title={tab.title}
            favicon={tab.favicon}
            active={tab.active}
            suffix={
              index + 1 !== props.tablist.length
                ? !props.tablist[index + 1].active
                : true
            }
          />
        ))}
      </div>
      <NewTab />
    </div>
  );
};

const Tab: FC<TabProps> = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-between h-full px-4 w-48 cursor-default select-none ${
        props.active
          ? "active-tab relative bg-back-20 rounded-t border-l-2 border-t-2 border-r-2 border-back-30"
          : `hover:bg-back-20 transition duration-500 ${
              props.suffix ? "relative tab-suffix" : ""
            }`
      } `}
      onClick={() =>
        !props.active ? window.ipc.tab.emitters.active(props.id) : void 0
      }
    >
      <div className="flex flex-row items-center justify-center w-full space-x-2">
        <img
          src={props.favicon || LoadingFavicon}
          className="w-4"
          onError={(e) => ((e.target as HTMLImageElement).src = MissingFavicon)}
        />
        <span
          className={`w-full relative text-xs overflow-hidden ${
            props.active ? "text-fore-20" : "text-fore-10"
          }`}
        >
          {props.title || props.url}
        </span>
      </div>
      <div
        className="flex flex-col items-center justify-center w-5 h-5 rounded text-fore-10 hover:text-fore-20 hover:bg-back-30 transition duration-500"
        onClick={(e) => {
          e.stopPropagation();
          window.ipc.tab.emitters.close(props.id);
        }}
      >
        <i className="far fa-times text-sm" />
      </div>
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
