import './App.css';
import {Route, Routes} from 'react-router'
import ContainerProduct from './components/ContainerProduct/ContainerProduct';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<ContainerProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
