import { useState } from 'react'
import { Navbar,Loader,Services,Transactions,Welcome,Footer } from './components';

const App=()=> {

  return (
    <div className="min-h-screen">
      <div className='bg-white'>
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App;
