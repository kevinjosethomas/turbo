import { ActionBar } from "./components/ActionBar";

export const TitleBar = props => {

  return (
    <div className="TitleBar flex flex-row items-center justify-between w-full h-header-titlebar bg-night-mare">
      <br /> {/* Add tab list component here */}
      <ActionBar isMaximized={props.isMaximized} />
    </div>
  )

}
