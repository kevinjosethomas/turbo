import { Controls } from './components/Controls';
import { SearchBar } from './components/SearchBar';

export const ToolBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-full h-header-toolbar px-4 bg-night-tab">
      <Controls
        onBackword={() => void(0)}
        onForward={() => void(0)}
        onReload={() => void(0)}
      />
      <SearchBar />
    </div>
  )

}
