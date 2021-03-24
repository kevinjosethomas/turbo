import { Search } from '../components/core/search/Search';
import { Titlebar } from '../components/core/titlebar/Titlebar';

export const CoreLayout = props => {

  return (
    <div className="flex flex-col w-full min-h-screen bg-night-600">
      <Titlebar window={props.window} />
      <Search />
    </div>
  )

}
