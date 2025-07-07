import React from 'react';
import Payment from './components/Payment';
import UserBar from './components/UserBar';
import PaView from './components/PaView';
import PaymentActive from './components/PaymentActive';

function App() {
  return (
    <div className='flex'>
      <PaymentActive />
      <div className='flex-1 flex flex-col'>
        <UserBar />
        <Payment />
       <PaView />
       

      </div> 
  
    </div>
  );
}

export default App;
