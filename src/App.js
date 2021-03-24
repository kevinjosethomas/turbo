import './styles/tailwind.css'
import { CoreLayout } from './layouts/core';
import { View } from './components/core/View';

const App = () => {

  let isMaximized;
  window.ipcRenderer.send('request-window-maximized');
  window.ipcRenderer.on('receive-window-maximized', (event, data) => {
    isMaximized = data;
  })

  return (
    <CoreLayout isMaximized={isMaximized}>
      <View id="1" />
    </CoreLayout>
  )

}

export default App;
