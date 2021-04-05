
export const Actions = props => {

  return (
    <div className="ActionBar flex flex-row items-center justify-end pr-4 space-x-2">
      <Action type="minimize" />
      { props.isMaximized
        ? <Action type="restore" />
        : <Action type="maximize" /> }
      <Action type="close" />
    </div>
  );

}

export const Action = props => {

  let icon;
  switch (props.type) {
    case "close":
      icon = (
        <i className="far fa-times text-lg"></i>
      );
      break;
    case "restore":
      icon = (
        <i className="far fa-window-restore text-lg" />
      );
      break;
    case "maximize":
      icon = (
        <i className="far fa-window-maximize text-lg"></i>
      );
      break;
    case "minimize":
      icon = (
        <i className="far fa-window-minimize text-lg" />
      );
      break;
  }

  return (
    <div
      className={`flex flex-row items-center justify-center w-10 h-10 cursor-pointer rounded ${props.type === 'close'
        ? 'hover:bg-red-800'
        : 'hover:bg-night-700'} text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active transition duration-300`}
      onClick={() => window.ipcRenderer.send('window-change', props.type)}
    >
      {icon}
    </div>
  );

}
