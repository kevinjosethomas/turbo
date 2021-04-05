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
      <div className="flex flex-col items-center justify-center w-max">

      </div>
    </div>
  )

}
