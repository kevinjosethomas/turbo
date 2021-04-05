import { Toolbar } from '../components/toolbar/Toolbar';
import { TitleBar } from '../components/titlebar/TitleBar';

export const Browser = props => {

  return (
    <div className="flex flex-col w-full min-h-screen bg-night-600">
      <div className="flex flex-col items-start justify-start w-full h-32">
        <TitleBar tablist={props.tablist} isMaximized={props.isMaximized} />
        <Toolbar tablist={props.tablist} />
      </div>
    </div>
  )

}
