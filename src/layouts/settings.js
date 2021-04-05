import { useState } from 'react';

import { Sidebar } from '../components/settings/Sidebar';

export const Settings = props => {

  const [activeSettingScreen, setActiveSettingScreen] = useState('Design');

  return (
    <div className="flex flex-row items-center justify-between w-screen h-screen bg-night-mare">
      <Sidebar
        activeSettingScreen={activeSettingScreen}
        setActiveSettingScreen={setActiveSettingScreen}
      />
      <div className="flex flex-col items-center justify-center w-9/12">
        <div className="flex flex-row items-center justify-between px-10 w-full">
          <span className="pl-4 font-semibold text-4xl text-night-sky-dawn">{ activeSettingScreen }</span>
        </div>
      </div>
    </div>
  )

}
