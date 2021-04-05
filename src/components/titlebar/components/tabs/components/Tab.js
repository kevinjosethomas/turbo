import loadingFavicon from '../../../../../assets/images/loading-favicon.gif';
import missingFavicon from '../../../../../assets/images/missing-favicon.svg';

export const Tab = props => {

  return (
    <div
      className={`relative flex flex-row items-center justify-between h-full px-4 w-48 ${props.active
        ? 'ActiveTab bg-night-tab border-l-2 border-t-2 border-r-2 rounded-t border-night-tab-active'
        : `${(props.suffix ? 'TabSuffix' : '')} Tab hover:bg-night-tab transition duration-300`
      } space-x-2 cursor-default select-none`}
      onClick={() => props.setActiveTab(props.id)}
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
