import { SearchBar } from './components/SearchBar';

export const ToolBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-full h-header-toolbar px-4 py-2 bg-night-tab">
      <SearchBar />
    </div>
  )

}
