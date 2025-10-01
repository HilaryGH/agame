
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      {/* Spacer to offset fixed top + main navbars (approx 112-120px total) */}
      <div className="h-[118px]"></div>
      <Home/>
    </>
  )
}

export default App
