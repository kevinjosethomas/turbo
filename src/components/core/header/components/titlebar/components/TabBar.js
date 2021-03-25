
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
        { props.tablist.map((tab, index) => (
          <Tab
            id={tab.id}
            key={tab.id}
            favicon={tab.favicon}
            title={tab.title}
            active={tab.active}
            suffix={index+1 !== props.tablist.length ? !props.tablist[index+1].active : true}
            setActiveTab={setActiveTab}
            closeTab={closeTab}
          />
        ))}
      </div>
      <NewTab onClick={createTab} />
    </div>
  );

}

export const Tab = props => {

  return (
    <div
      className={`relative flex flex-row items-center justify-between h-full px-4 w-48 ${props.active
        ? 'ActiveTab bg-night-tab border-l-2 border-t-2 border-r-2 rounded-t border-night-tab-active'
        : (props.suffix ? 'Tab' : '')
      } space-x-2 cursor-default select-none`}
      onClick={() => {props.setActiveTab(props.id)}}
      key={props.id}
    >
      <div className="flex flex-row items-center justify-start w-full space-x-3">
        <img
          className="w-5"
          src={props.favicon}
        />
        <span className={`w-full relative text-xs overflow-hidden whitespace-nowrap ${props.active
          ? 'ActiveTabTitle text-night-sky-noon'
          : 'TabTitle text-night-sky-dusk'}`}>{ props.title }</span>
      </div>
      <div
        className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer hover:bg-night-tab-active rounded transition duration-300"
        onClick={() => props.closeTab(props.id)}
      >
      <i className="far fa-times text-night-sky-dusk" />
      </div>
    </div>
  )

}

export const NewTab = props => {

  return (
    <div
      className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon bg-night-tab hover:bg-night-tab-active rounded transition duration-300"
      onClick={props.onClick}
    >
      <i className="far fa-plus text-lg" />
    </div>
  );
}
