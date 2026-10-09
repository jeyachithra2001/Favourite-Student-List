import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar"
import { StudentContextProvider } from "./context/studentContext"
import Home from "./pages/home"
import Favourite from './pages/favourite'

function App() {

  return (
    <div className='bg-[#F0F4F9] rounded-xl pb-5'>
      <StudentContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      </StudentContextProvider>
    </div>
  )
}

export default App
