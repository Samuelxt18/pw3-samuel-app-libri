/* importa os componentes de navegação da aplicacão*/
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/*importa o css*/
import './App.css'

// importa o componente de meu
import NavBar from './components/layout/NavBar'

import Container from './components/layout/Container'

/*importação das paginas*/
import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'


   /*tem que estar igual no navbar na tag route quando for importar Samuel */


function App() {

  return (
    <>
    {/*Estrutura de navegação*/}
    <BrowserRouter>

    <Container>
 
      <Routes>    

      <Route path='/' element={<NavBar/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/listBooks' element={<ListBooks/>}/> 
      <Route path='/createBooks' element={<CreateBooks/>}/>

      </Route>
      </Routes>

    </Container>

    </BrowserRouter>
  </>
  )
}

export default App
