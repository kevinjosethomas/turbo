import { Hex } from './components/Hex';

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
