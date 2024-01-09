import './App.css';
import Account from './components/account/account';
import Bonus from './components/bonus/bonus';

import { useSelector } from "react-redux";

// additional
import Reward from './components/reward/reward';


function App() {



  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  
  const account = useSelector(state => state.account);


  return (
    <div className="App">

      <h4 style={{ color: "red" }}>App : </h4>



      {/* <h3 style={{ color: "yellow" }}>Current Amount : {amount} </h3> */}
      {/* <h3 style={{ color: "yellow" }}>Total Bonus : {points} </h3> */}

      {
        account.pending ? <p>...loading</p> :
          account.error ? <span>{account.error.message}</span> :
            <h3 style={{ color: "yellow" }}>Current Amount : {amount} </h3>

      }





      <Account />
      <Bonus />

      {/* additional */}
      <Reward />
    </div>
  );
}

export default App;
