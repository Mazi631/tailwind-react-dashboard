import React from 'react';
import Sidebar from './components/Sidebar';
import UserBar from './components/UserBar';
import Activatebar from './components/Activatebar';
import BaForm from './components/BaForm';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <UserBar />
        <Activatebar />
        <div className="flex justify-center bg-green-500 items-center p-8 min-h-[60vh]">
          <BaForm />
        </div>
      </div>
      
      
  
    </div>
  );
}

export default App;
