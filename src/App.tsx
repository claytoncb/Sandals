import './App.css';
import CoordinatesContainer from './Components/CoordinatesContainer';
import FunctionalsLibrary from './Components/FunctionalsLibrary';
import Workspace from './Components/Workspace';
import { Node } from './Classes/Node';

function App() {
  const rootOrigin = new Node('rootOrigin',0)
  const ToolBar = () => <div className='ToolBar'> <CoordinatesContainer/> <FunctionalsLibrary/> </div>
  return (
    <div className="App">
      <header className="WorkSpace">
        <Workspace rootOrigin={rootOrigin}/>
      </header>
      <ToolBar/>
    </div>
  );
}

export default App;
