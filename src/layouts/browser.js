// import { Header } from '../components/core/header/Header';
import { ToolBar } from '../components/toolbar/ToolBar';
import { TitleBar } from '../components/titlebar/TitleBar';

export const Browser = props => {

  return (
    <div className="flex flex-col w-full min-h-screen bg-night-600">
      <div className="flex flex-col items-start justify-start w-full h-32">
        <TitleBar tablist={props.tablist} isMaximized={props.isMaximized} />
        <ToolBar tablist={props.tablist} />
      </div>
      {/* <Header tablist={props.tablist} isMaximized={props.isMaximized} /> */}
    </div>
  )

}
