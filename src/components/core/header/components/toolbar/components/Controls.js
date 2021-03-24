
export const Controls = props => {

  return (
    <div className="flex flex-row items-center justify-center h-full space-x-4">
      <ControlButton icon="far fa-arrow-left" onClick={() => props.onBackward()}  />
      <ControlButton icon="far fa-arrow-right" onClick={() => props.onForward()}  />
      <ControlButton icon="far fa-redo" onClick={() => props.onReload()}  />
    </div>
  );

}

export const ControlButton = props => {

  return (
    <div
      className="w-10 h-10 p-2 text-center cursor-pointer text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active rounded transition duration-300"
      onClick={() => props.onClick()}>
      <i className={`${props.icon} text-lg`} />
    </div>
  );

}
