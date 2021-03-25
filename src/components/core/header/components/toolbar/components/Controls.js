import ReactTooltip from 'react-tooltip';

export const Controls = props => {

  return (
    <div className="flex flex-row items-center justify-center h-full mr-4 space-x-4">
      <ControlButton
        icon="far fa-arrow-left"
        onClick={() => props.onBackward()}
        tooltip="Go Back"
      />
      <ControlButton
        icon="far fa-arrow-right"
        onClick={() => props.onForward()}
        tooltip="Go Forward"
      />
      <ControlButton
        icon="far fa-redo"
        onClick={() => props.onReload()}
        tooltip="Reload"
      />
      <ReactTooltip
        className="ToolbarTooltip"
        effect="solid"
        delayShow={1000}
      />
    </div>
  );

}

export const ControlButton = props => {

  return (
    <div
      className="flex flex-col items-center justify-center w-10 h-10 p-2 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active rounded transition duration-300"
      onClick={() => props.onClick()}
      data-tip={props.tooltip}
    >
      <i className={`${props.icon} text-lg`} />
    </div>
  );

}
