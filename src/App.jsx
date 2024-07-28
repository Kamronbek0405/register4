import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout'
import { Login } from './pages/auth/login'
import { Register } from './pages/auth/register'
import { Catigory } from './pages/catigory'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Catigory/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
