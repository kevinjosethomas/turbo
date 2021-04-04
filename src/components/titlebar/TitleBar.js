import { TabBar } from './components/TabBar';
import { ActionBar } from './components/ActionBar';


export const TitleBar = props => {

  return (
    <div className="TitleBar flex flex-row items-center justify-between w-full h-header-titlebar bg-night-mare">
      <TabBar tablist={props.tablist} />
      <ActionBar isMaximized={props.isMaximized} />
    </div>
  )

}
