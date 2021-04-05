import { TabBar } from './components/TabBar';
import { Actions } from './components/Actions';

export const Titlebar = props => {

  return (
    <div className="TitleBar flex flex-row items-center justify-between w-full h-header-titlebar bg-night-mare">
      <TabBar tablist={props.tablist} />
      <Actions isMaximized={props.isMaximized} />
    </div>
  )

}
