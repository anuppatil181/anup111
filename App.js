import './App.css';
import rocketImg from './assets/rocket.png';
//import { Signup } from './components/Signup';
//import { Password } from './components/Password';
import { Confirmpass } from './components/Confirmpass';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          {/* <Signup/> */}
          {/* <Password/>  */}
          <Confirmpass/>
         

        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={rocketImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
