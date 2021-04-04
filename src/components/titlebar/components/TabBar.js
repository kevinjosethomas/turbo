import loadingFavicon from '../../../assets/images/loading-favicon.gif';
import missingFavicon from '../../../assets/images/missing-favicon.svg';

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

  const onHome = () => void(0);

  return (
    <div className="TabBar flex flex-row items-center justify-start h-full space-x-6">
      <ControlBar
        onHome={onHome}
        tablist={props.tablist}
      />
      <div className="flex flex-row items-center justify-start h-full">
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

export const ControlBar = props => {

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

export const Tab = props => {

  return (
    <div
      className={`relative flex flex-row items-center justify-between h-full px-4 w-48 ${props.active
        ? 'ActiveTab bg-night-tab border-l-2 border-t-2 border-r-2 rounded-t border-night-tab-active'
        : `${(props.suffix ? 'TabSuffix' : '')} Tab hover:bg-night-tab transition duration-300`
      } space-x-2 cursor-default select-none`}
      onClick={event => props.setActiveTab(props.id)}
      key={props.id}
    >
      <div className="flex flex-row items-center justify-start w-full space-x-3">
        <img
          className="w-5"
          src={props.favicon ? props.favicon : loadingFavicon}
          onError={event => event.target.src = missingFavicon}
        />
        <span className={`w-full relative text-xs overflow-hidden whitespace-nowrap max-w-tab-title ${props.active
          ? 'ActiveTabTitle text-night-sky-noon'
          : 'TabTitle text-night-sky-dusk transition duration-300'}
        `}>{ props.title }</span>
      </div>
      <div
        className="flex flex-col items-center justify-center w-5 h-5 cursor-pointer hover:bg-night-tab-active rounded transition duration-300"
        onClick={(e) => {
          e.stopPropagation();
          props.closeTab(props.id)
        }}
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

