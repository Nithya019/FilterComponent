import logo from './logo.svg';
import Chip from './js/Chip';
import {userData} from './const/data'

function App() {
  return (
    <div className="App">
<Chip data={userData}/>
    </div>
  );
}

export default App;
