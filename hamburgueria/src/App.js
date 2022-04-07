import './Global.css'
import './App.css';
import Produtos from './produtos.json'
import { useState } from 'react'
import Pesquisa from './components/Pesquisa';
import ListaProdutos from './components/ListaProdutos';
import Carro from './components/Carro';

function App() {
  const [produtos, setProdutos] = useState(Produtos)
  const [carro, setCarro] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger <span>Kenzie</span></h1>
        <Pesquisa produtos={Produtos} setProdutos={setProdutos}/>
      </header>
      <main>
        <ListaProdutos listaProdutos={produtos} carro={carro} setCarro={setCarro}/>
        <Carro carro={carro} setCarro={setCarro}/>
      </main>
    </div>
  );
}

export default App;
