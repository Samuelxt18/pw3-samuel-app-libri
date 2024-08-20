
/*importa o css*/
import './App.css'

import CardBooks from './components/CardBooks'
import capaLivro from './assets/livros/cavernas_aco.jpg'

function App() {
  

  return (
    <>
      <CardBooks
        titulo='Cavernas de Aço'
        autor= 'Isaac Asimov'
        imagem={capaLivro}
      />
      
      
    </>
  )
}

export default App
