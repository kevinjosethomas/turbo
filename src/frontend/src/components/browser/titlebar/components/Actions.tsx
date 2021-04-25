import { FC } from "react";

import Close from "../../../../assets/icons/browser/osx-close.svg";
import Maximize from "../../../../assets/icons/browser/osx-maximize.svg";
import Minimize from "../../../../assets/icons/browser/osx-minimize.svg";

interface ActionProps {
  type: string;
  onClick: () => void;
}

interface Icons {
  close: string;
  restore: string;
  minimize: string;
}

const icons: Record<string, string> = {
  close: Close,
  restore: Maximize,
  minimize: Minimize,
};

const Actions: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center h-full py-4 space-x-2">
      <Action type="minimize" onClick={window.ipc.minimize} />
      <Action type="restore" onClick={window.ipc.restore} />
      <Action type="close" onClick={window.ipc.close} />
    </div>
  );
};

const Action: FC<ActionProps> = (props) => {
  return (
    <img
      src={icons[props.type]}
      className="w-3 filter hover:brightness-75 transition duration-300"
      onClick={props.onClick}
      draggable="false"
    />
  );
};

export default Actions;
