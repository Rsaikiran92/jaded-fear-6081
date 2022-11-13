
import './App.css';
import { Routes, Route} from "react-router-dom";
import Mainpage from './Components/MainPage';
import Signin from './Components/Signin';
import CreateAccount from './Components/Createaccount';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainpage/>}></Route>
        <Route path='/login' element={<Signin/>}></Route>
        <Route path='/signup' element={<CreateAccount/>}></Route>
      </Routes>    
    </div>
  );
}

export default App;
