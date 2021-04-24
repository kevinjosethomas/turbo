export const Utility = (props) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="flex flex-col items-center justify-center w-10 h-10 p-2 cursor-pointer text-night-sky-dusk hover:text-night-sky-noon hover:bg-night-tab-active rounded transition duration-300"
        onClick={() => window.ipcRenderer.send("create-tab")}
      >
        <i className="fas fa-cog text-lg" />
      </div>
    </div>
  );
};
