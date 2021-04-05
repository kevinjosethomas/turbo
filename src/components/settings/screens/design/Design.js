
export const Design = props => {

  return (
    <div className="flex flex-row items-start justify-start px-10 w-full h-full space-x-12">
      <div className="flex flex-col items-start justify-start space-y-6">
        <Hex label="Really Dark Backgrounds" />
        <Hex label="Slightly Dark Backgrounds" />
        <Hex label="Moody Backgrounds" />
      </div>
      <div className="flex flex-col items-start justify-start space-y-6">
        <Hex label="Really Dark Text" />
        <Hex label="Pretty Dark Text" />
        <Hex label="Not Light Text" />
      </div>
    </div>
  );

}

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
