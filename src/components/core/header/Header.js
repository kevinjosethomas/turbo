import { TitleBar } from './components/titlebar/TitleBar';
import { ToolBar } from './components/toolbar/ToolBar';

export const Header = props => {

  return (
    <div className="flex flex-col items-start justify-start w-full h-28">
      <TitleBar isMaximized={props.isMaximized} />
      <ToolBar />
    </div>
  );

}
