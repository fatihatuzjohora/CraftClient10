
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Components/Navber/Navber'
import Footer from './Components/Footer'

function App() {
  

  return (
    <div>
     <div className='min-h-[100vh] max-w-7xl mx-auto'>
     <Navber></Navber>
     <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default App
