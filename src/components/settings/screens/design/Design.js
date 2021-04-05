import { Hex } from './components/Hex';

export const Design = props => {

  const hexes = [
    {
      name: '--color-nightmare',
      label: 'Really Dark Background'
    },
    {
      name: '--color-night-sky-dusk',
      label: 'Really Dark Text'
    },
    {
      name: '--color-night-tab',
      label: 'Slightly Dark Background'
    },
    {
      name: '--color-night-sky-noon',
      label: 'Pretty Dark Text'
    },
    {
      name: '--color-night-tab-active',
      label: 'Moody Background'
    },
    {
      name: '--color-night-sky-dawn',
      label: 'Not Light Text'
    },
  ]

  const changeHex = (name, hex) => {
    window.ipcRenderer.send('change-color', { name: name, hex: '#'+hex })
  }

  return (
    <div className="flex flex-row items-start justify-start px-10 w-full h-full">
      <div className="flex flex-row items-start justify-start flex-wrap max-w-2xl">
        { hexes.map((hex, index) => (
          <Hex
            key={index}
            name={hex.name}
            label={hex.label}
            changeHex={changeHex}
          />
        ))}
      </div>
    </div>
  );

}
