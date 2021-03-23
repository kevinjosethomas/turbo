import { useEffect } from "react";

import './styles/tailwind.css'
import { CoreLayout } from "./layouts/core";
import { View } from './components/core/View';

const App = () => {

  let remote, mainWindow;
  useEffect(() => {
    remote = window.electron.remote;
    mainWindow = remote.getCurrentWindow();
  }, [])

  return (
    <CoreLayout window={mainWindow}>
      <View id="1" />
    </CoreLayout>
  )

}

export default App;
