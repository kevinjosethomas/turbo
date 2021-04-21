import { Toolbar } from "../components/toolbar/Toolbar";
import { Titlebar } from "../components/titlebar/Titlebar";

export const Browser = (props) => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-night-600">
      <div className="flex flex-col items-start justify-start w-full h-header">
        <Titlebar tablist={props.tablist} isMaximized={props.isMaximized} />
        <Toolbar tablist={props.tablist} />
      </div>
    </div>
  );
};
