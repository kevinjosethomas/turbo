
export const Sidebar = props => {

  return (
    <div className="flex flex-col items-start justify-center px-6 w-3/12 h-full bg-night-tab">
      <div className="flex flex-row items-center justify-start w-full px-4 py-2 space-x-2 cursor-pointer rounded-md hover:bg-night-tab-active transition duration-300">
        <i className="fas fa-palette text-xl text-night-sky-dawn" />
        <span className="text-xl text-night-sky-dawn">Design</span>
      </div>
    </div>
  );

}
