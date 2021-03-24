import { Buttons } from './components/Buttons';
import { SearchBar } from './components/SearchBar';

export const ToolBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-full h-header-toolbar px-4 bg-night-tab">
      <Buttons />
      <SearchBar />
    </div>
  )

}
