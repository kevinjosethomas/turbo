import { ActionBar } from "./components/ActionBar";

export const Titlebar = props => {

  return (
    <div className="flex flex-row items-center justify-between bg-night-800">
      <br /> {/* Add tab list component here */}
      <ActionBar />
    </div>
  )

}
