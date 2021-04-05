
export const Controls = props => {

  return (
    <div className="TitleControlBar relative flex flex-row items-center justify-center h-full px-4 space-x-4 bg-night-tab border-t-2 border-r-2 border-night-tab-active rounded-tr">
      <div
        className="flex flex-col items-center justify-center w-10 h-10 p-2 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active rounded transition duration-300"
        onClick={() => props.onHome()}
      >
        <i className="far fa-home-alt text-lg" />
      </div>
      <div
        className="flex flex-col items-center justify-center w-10 h-10 p-2 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active rounded border-2 border-night-tab-active transition duration-300"
      >
        <span>{props.tablist.length}</span>
      </div>
    </div>
  );

}
