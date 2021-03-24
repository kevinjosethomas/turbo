
export const TabBar = props => {

  const createTab = () => {
    window.ipcRenderer.send('create-tab');
  }

  const setActiveTab = (id) => {
    window.ipcRenderer.send('set-active-tab', id);
  }

  const closeTab = (id) => {
    window.ipcRenderer.send('close-tab', id);
  }

  return (
    <div className="TabBar flex flex-row items-center justify-start h-full space-x-6">
      <div className="flex flex-row items-center justify-start h-full space-x-4">
        { props.tablist.map(tab => (
          <Tab
            id={tab.id}
            key={tab.id}
            title={tab.url.startsWith('https://') ? tab.url.replace('https://', '') : tab.url.replace('http://', '')}
            active={tab.active}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
          />
        ))}
      </div>
      <div
        className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon bg-night-tab hover:bg-night-tab-active rounded transition duration-300"
        onClick={createTab}
      >
        <i className="far fa-plus text-lg" />
      </div>
    </div>
  );

}

export const Tab = props => {

  return (
    <div
      className={`Tab flex flex-row items-center justify-center px-4 space-x-6 h-6 cursor-default select-none rounded border-r-2 border-night-tab-active`}
      onClick={() => {props.setActiveTab(props.id)}}
      key={props.id}
    >
      <span className={`text-sm ${props.active ? 'text-night-sky-noon' : 'text-night-sky-dusk'}`}>{ props.title }</span>
      <div
        className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer hover:bg-night-tab-active rounded transition duration-300"
        onClick={() => props.closeTab(props.id)}
      >
        <i className="far fa-times text-night-sky-dusk" />
      </div>
    </div>
  )

}
