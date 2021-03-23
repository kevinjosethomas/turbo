import './styles/tailwind.css'
import { View } from './components/core/View';
import { Search } from './components/core/search/Search';

const App = () => {

  return (
    <div className="flex flex-col min-h-screen w-full min-h-screen h-full bg-white">
      <Search />
      <View
        id="1"
      />
    </div>
  )

}

export default App;
