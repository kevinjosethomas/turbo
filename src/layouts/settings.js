import { useState } from "react";

import { Sidebar } from "../components/settings/Sidebar";
import { Design } from "../components/settings/screens/design/Design";

export const Settings = (props) => {
  const [activeSettingScreen, setActiveSettingScreen] = useState("Design");

  return (
    <div className="flex flex-row items-center justify-between w-screen h-screen bg-night-mare">
      <Sidebar
        activeSettingScreen={activeSettingScreen}
        setActiveSettingScreen={setActiveSettingScreen}
      />
      <div className="flex flex-col items-center justify-center py-10 w-9/12 h-full space-y-6">
        <div className="flex flex-row items-center justify-between px-10 w-full">
          <span className="font-semibold text-4xl text-night-sky-dawn">
            {activeSettingScreen}
          </span>
          <div
            className="flex flex-row items-center justify-center w-10 h-10 bg-night-tab hover:bg-night-tab-active rounded-md transition duration-300"
            onClick={() => window.ipcRenderer.send("close-modal")}
          >
            <i className="fas fa-times text-xl text-night-sky-dawn" />
          </div>
        </div>
        <Design />
      </div>
    </div>
  );
};
