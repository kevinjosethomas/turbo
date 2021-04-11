export const Sidebar = (props) => {
  const elements = [
    {
      name: "Design",
      icon: "fal fa-palette",
    },
    {
      name: "System",
      icon: "fal fa-phone-laptop",
    },
    {
      name: "Downloads",
      icon: "fal fa-arrow-to-bottom",
    },
    {
      name: "History",
      icon: "fal fa-history",
    },
    {
      name: "Defaults",
      icon: "fal fa-cog",
    },
    {
      name: "Information",
      icon: "fal fa-info-circle",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-between px-6 py-10 w-3/12 h-full bg-night-tab">
      <div className="flex flex-col items-start justify-center w-full space-y-6">
        <span className="pl-4 font-semibold text-4xl text-night-sky-dawn">
          Settings
        </span>
        <div className="flex flex-col items-start justify-center w-full space-y-2">
          {elements.map((element) => (
            <Element
              name={element.name}
              icon={element.icon}
              active={props.activeSettingScreen === element.name}
              onClick={props.setActiveSettingScreen}
            />
          ))}
        </div>
      </div>
      <Element
        name="Reset to Defaults"
        icon="far fa-redo-alt"
        onClick={() => void 0}
      />
    </div>
  );
};

export const Element = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-start w-full px-4 py-2 space-x-2 ${
        props.active
          ? "bg-night-tab-active"
          : "hover:bg-night-tab-active transition duration-300"
      } cursor-pointer rounded-md`}
      onClick={() => props.onClick(props.name)}
    >
      <i
        className={`${props.icon} w-6 text-center text-xl text-night-sky-dawn`}
      />
      <span className="text-xl text-night-sky-dawn">{props.name}</span>
    </div>
  );
};
