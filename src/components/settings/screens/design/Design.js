import { Hex } from './components/Hex';

export const Design = props => {

  const hexes = [
    {
      id: 1,
      label: 'Really Dark Background'
    },
    {
      id: 2,
      label: 'Really Dark Text'
    },
    {
      id: 3,
      label: 'Slightly Dark Background'
    },
    {
      id: 4,
      label: 'Pretty Dark Text'
    },
    {
      id: 5,
      label: 'Moody Background'
    },
    {
      id: 6,
      label: 'Not Light Text'
    },
  ]

  const changeHex = (id, hex) => {
    console.log('changing hex')
    console.log(hex)
  }

  return (
    <div className="flex flex-row items-start justify-start px-10 w-full h-full">
      <div className="flex flex-row items-start justify-start flex-wrap max-w-2xl">
        { hexes.map(hex => (
          <Hex
            key={hex.id}
            id={hex.id}
            label={hex.label}
            changeHex={changeHex}
          />
        ))}
      </div>
    </div>
  );

}
