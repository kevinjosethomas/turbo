
export const Hex = props => {

  return (
    <div className="flex flex-col items-start justify-center space-y-2">
      <span className="font-semibold text-xl text-night-sky-noon">{ props.label }</span>
      <div className="flex flex-row items-start justify-start bg-night-tab w-64 h-10 rounded">
        <div className="flex flex-col items-center justify-center w-14 h-10 bg-night-tab-active rounded-l">
          <i className="fas fa-hashtag text-night-sky-dusk text-xl" />
        </div>
        <input className="px-2 w-full h-full text-xl text-night-sky-noon bg-night-tab focus:outline-none rounded-r" />
      </div>
    </div>
  );

}
