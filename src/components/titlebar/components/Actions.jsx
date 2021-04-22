import close from "../../../assets/icons/titlebar/osx_close.svg";
import maximize from "../../../assets/icons/titlebar/osx_maximize.svg";
import minimize from "../../../assets/icons/titlebar/osx_minimize.svg";

// onClick={() => window.ipcRenderer.send("window-change", props.type)}

export const Actions = (props) => {
  return (
    <div className="ActionBar flex flex-row items-center justify-end p-4 h-full space-x-3">
      <Action type="minimize" />
      <Action type="maximize" />
      <Action type="close" />
    </div>
  );
};

export const Action = (props) => {
  const icon =
    props.type === "close"
      ? close
      : props.type === "maximize"
      ? maximize
      : props.type === "minimize"
      ? minimize
      : null;

  return (
    <img
      src={icon}
      className="w-3 filter hover:brightness-75 transition duration-300"
      draggable="false"
      onClick={() => window.ipcRenderer.send("window-change", props.type)}
    />
  );
};
