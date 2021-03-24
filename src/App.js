import { useState } from "react";

import './styles/tailwind.css'
import { CoreLayout } from './layouts/core';
import { View } from './components/core/View';

const App = () => {

  const [isMaximized, setMaximized] = useState(true);
  window.ipcRenderer.send('request-window-maximized');
  window.ipcRenderer.on('receive-window-maximized', (event, data) => {
    setMaximized(data);
  })

  return (
    <CoreLayout isMaximized={isMaximized}>
      <View id="1" />
    </CoreLayout>
  )

}

export default App;
