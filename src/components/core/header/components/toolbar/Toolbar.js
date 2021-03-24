import { SearchBar } from './components/SearchBar';

export const ToolBar = props => {

  return (
    <div className="flex flex-row items-center justify-start w-full px-4 py-2 bg-night-700">
      <Search />
    </div>
  )

}
