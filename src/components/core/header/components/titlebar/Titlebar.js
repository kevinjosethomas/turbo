import { ActionBar } from "./components/ActionBar";

export const TitleBar = props => {

  return (
    <div className="flex flex-row items-center justify-between bg-night-900">
      <br /> {/* Add tab list component here */}
      <ActionBar isMaximized={props.isMaximized} />
    </div>
  )

}
