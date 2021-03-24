
export const ActionBar = props => {

  return (
    <div className="flex flex-row items-center justify-end">
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
  const iconColor = "#D1D5DB";
  switch (props.type) {
    case "close":
      icon = (
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path
            fill={iconColor}
            d="m6.8496 6 5.1504 5.1504-0.84961 0.84961-5.1504-5.1504-5.1504 5.1504-0.84961-0.84961 5.1504-5.1504-5.1504-5.1504 0.84961-0.84961 5.1504 5.1504 5.1504-5.1504 0.84961 0.84961z"
            strokeWidth=".3"
          />
        </svg>
      );
      break;
    case "restore":
      icon = (
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path fill={iconColor} d="m10-1.6667e-6v10h-10v-10zm-1.001 1.001h-7.998v7.998h7.998z" strokeWidth=".25" />
        </svg>
      );
      break;
    case "maximize": 
      icon = (
        <svg width="11" height="11" viewBox="0 0 11 11">
          <path
            d="m11 8.7978h-2.2021v2.2022h-8.7979v-8.7978h2.2021v-2.2022h8.7979zm-3.2979-5.5h-6.6012v6.6011h6.6012zm2.1968-2.1968h-6.6012v1.1011h5.5v5.5h1.1011z"
            fill={iconColor} strokeWidth=".275"
          />
        </svg>
      );
      break;
    case "minimize":
      icon = (
        <svg width="11" height="1" viewBox="0 0 11 1">
          <path fill={iconColor} d="m11 0v1h-11v-1z" strokeWidth=".26208"/>
        </svg>
      );
      break;
  }

  return (
    <div
      className={`flex flex-row items-center justify-center h-10 w-10 cursor-pointer ${props.type === 'close'? 'hover:bg-red-800' : 'hover:bg-night-700'}`}
      onClick={() => window.ipcRenderer.send('window-change', props.type)}
    >
      {icon}
    </div>
  );

}
