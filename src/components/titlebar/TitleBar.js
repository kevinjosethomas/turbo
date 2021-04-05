import { Tabs } from './components/Tabs';
import { Actions } from './components/Actions';

export const Titlebar = props => {

  return (
    <div className="TitleBar flex flex-row items-center justify-between w-full h-header-titlebar bg-night-mare">
      <Tabs tablist={props.tablist} />
      <Actions isMaximized={props.isMaximized} />
    </div>
  )

}
