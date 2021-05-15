import { FC } from "react";

import LoadingFavicon from "../../assets/icons/browser/loading-favicon.gif";
import MissingFavicon from "../../assets/icons/browser/missing-favicon.svg";

interface TabProps {
  id: number;
  url: string;
  friendlyUrl: string;
  title?: string;
  favicon?: string;
  active?: boolean;
  engine?: string;
}

const Tab: FC<TabProps> = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-start w-full px-4 py-2 space-x-4 ${
        props.active ? "bg-back-20" : ""
      } hover:bg-back-20 select-none`}
    >
      <img
        src={props.favicon || LoadingFavicon}
        className="w-6"
        onError={(e) => ((e.target as HTMLImageElement).src = MissingFavicon)}
        draggable="false"
      />
      <div className="flex flex-col items-start justify-center">
        <span className="font-medium text-sm text-gray-400">{props.title}</span>
        <span className="font-medium text-xs text-gray-500">
          {props.friendlyUrl}
        </span>
      </div>
    </div>
  );
};

export default Tab;
