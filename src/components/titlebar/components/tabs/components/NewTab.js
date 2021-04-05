
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
