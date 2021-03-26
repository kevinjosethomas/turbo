import { Controls } from './components/Controls';
import { SearchBar } from './components/SearchBar';

export const ToolBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-full h-header-toolbar px-4 bg-night-tab border-t-2 border-night-tab-active">
      <Controls
        onBackward={() => void(0)}
        onForward={() => void(0)}
        onReload={() => window.ipcRenderer.send('reload-tab')}
      />
      <SearchBar tablist={props.tablist} />
    </div>
  )

}
