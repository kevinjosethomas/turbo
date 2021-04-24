import { FC } from "react";

interface ControlProps {
  icon: string;
}

const Controls: FC = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2 h-full">
      <Control icon="far fa-arrow-left" />
      <Control icon="far fa-arrow-right" />
      <Control icon="far fa-redo" />
    </div>
  );
};

const Control: FC<ControlProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-10 h-10 text-fore-10 hover:text-fore-20 hover:bg-back-30 rounded transition duration-500">
      <i className={`${props.icon} text-lg`} />
    </div>
  );
};

export default Controls;
