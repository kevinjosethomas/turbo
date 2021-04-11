import { Hex } from "./components/Hex";

export const Design = (props) => {
  const computedStyle = getComputedStyle(document.documentElement);
  const hexes = [
    {
      name: "--color-nightmare",
      label: "Really Dark Background",
      value: computedStyle.getPropertyValue("--color-nightmare"),
    },
    {
      name: "--color-night-sky-dusk",
      label: "Really Dark Text",
      value: computedStyle.getPropertyValue("--color-night-sky-dusk"),
    },
    {
      name: "--color-night-tab",
      label: "Slightly Dark Background",
      value: computedStyle.getPropertyValue("--color-night-tab"),
    },
    {
      name: "--color-night-sky-noon",
      label: "Pretty Dark Text",
      value: computedStyle.getPropertyValue("--color-night-sky-noon"),
    },
    {
      name: "--color-night-tab-active",
      label: "Moody Background",
      value: computedStyle.getPropertyValue("--color-night-tab-active"),
    },
    {
      name: "--color-night-sky-dawn",
      label: "Not Light Text",
      value: computedStyle.getPropertyValue("--color-night-sky-dawn"),
    },
  ];

  console.log(hexes);

  const changeHex = (name, hex) => {
    window.ipcRenderer.send("change-color", { name: name, hex: "#" + hex });
  };

  return (
    <div className="flex flex-row items-start justify-start px-10 w-full h-full">
      <div className="flex flex-row items-start justify-start flex-wrap max-w-2xl">
        {hexes.map((hex, index) => (
          <Hex
            key={index}
            name={hex.name}
            value={hex.value}
            label={hex.label}
            changeHex={changeHex}
          />
        ))}
      </div>
    </div>
  );
};
