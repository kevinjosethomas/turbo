import { Header } from '../components/core/header/Header';

export const Browser = props => {

  return (
    <div className="flex flex-col w-full min-h-screen bg-night-600">
      <Header tablist={props.tablist} isMaximized={props.isMaximized} />
    </div>
  )

}
