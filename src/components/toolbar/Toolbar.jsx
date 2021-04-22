import { Controls } from "./components/Controls";
import { SearchBar } from "./components/SearchBar";
import { Utility } from "./components/Utility";

export const Toolbar = (props) => {
  return (
    <div className="flex flex-row items-center justify-start w-full h-header-toolbar px-4 space-x-4 bg-night-tab border-t-2 border-night-tab-active">
      <Controls
        onBackward={() => window.ipcRenderer.send("backward-tab")}
        onForward={() => window.ipcRenderer.send("forward-tab")}
        onReload={() => window.ipcRenderer.send("reload-tab")}
      />
      <SearchBar tablist={props.tablist} />
      <Utility />
    </div>
  );
};
