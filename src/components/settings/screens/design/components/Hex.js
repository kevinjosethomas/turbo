
export const Hex = props => {

  const onChange = event => {
    const value = event.target.value.replace('#', '').toUpperCase();
    event.target.value = value.substring(0, 6);
    if (/^#[0-9A-F]{6}$/i.test('#'+value)) {
      props.changeHex(props.id, value);
    } else {
      return;
    }
  }

  return (
    <div className="flex flex-col items-start justify-center mr-10 mb-6 space-y-2">
      <span className="font-semibold text-xl text-night-sky-noon">{ props.label }</span>
      <div className="flex flex-row items-start justify-start bg-night-tab w-64 h-10 rounded">
        <div className="flex flex-col items-center justify-center w-14 h-10 bg-night-tab-active rounded-l">
          <i className="fas fa-hashtag text-night-sky-dusk text-xl" />
        </div>
        <input
          className="px-2 w-full h-full text-xl text-night-sky-noon bg-night-tab focus:outline-none rounded-r"
          onChange={onChange}
        />
      </div>
    </div>
  );

}
