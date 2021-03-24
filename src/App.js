import './styles/tailwind.css'
import { CoreLayout } from "./layouts/core";
import { View } from './components/core/View';

const App = () => {

  return (
    <CoreLayout>
      <View id="1" />
    </CoreLayout>
  )

}

export default App;
