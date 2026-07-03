import { BrowserRouter, Route, Routes } from 'react-router'

//STYLES
import './App.css'

//PAGINAS
import { Home } from './pages/Home'
import SinglePage from './pages/SinglePage'
import NotFound from './pages/NotFound'


function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/singlepage' element={<SinglePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
