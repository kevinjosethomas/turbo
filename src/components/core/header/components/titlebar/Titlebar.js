import { TabBar } from './components/TabBar';
import { ActionBar } from './components/ActionBar';


export const TitleBar = props => {

  const createTab = () => window.ipcRenderer.send('create-tab');

  return (
    <div className="TitleBar flex flex-row items-center justify-between w-full pl-4 h-header-titlebar bg-night-mare">
      <div className="TabBar flex flex-row items-center justify-start">
        <TabBar tablist={props.tablist} />
        <div
          className="flex flex-col items-center justify-center w-10 h-10 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon bg-night-tab hover:bg-night-tab-active rounded transition duration-300"
          onClick={createTab}
        >
          <i className="far fa-plus text-lg" />
        </div>
      </div>
      <ActionBar isMaximized={props.isMaximized} />
    </div>
  )

}
