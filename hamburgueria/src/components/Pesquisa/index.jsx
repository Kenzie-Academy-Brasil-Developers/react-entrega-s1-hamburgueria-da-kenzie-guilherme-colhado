import './style.css'
import { useState } from 'react'

export default function Pesquisa({produtos, setProdutos}){
    function filter(valorFiltrado){
        setProdutos(produtos.filter(produto=>produto.category.toLowerCase().includes(valorFiltrado) || produto.name.toLowerCase().includes(valorFiltrado)))
    }
    const [filtro, setFiltro] = useState('')
    return <div className='pesquisa'>
        <input type="text" placeholder='Digitar Pesquisa' onChange={(e) => setFiltro(e.target.value.toLowerCase())} onKeyDown={(e)=> {if(e.key==='Enter') filter(e.target.value.toLowerCase())}}/>
        <button onClick={() => filter(filtro)}>Pesquisar</button>
    </div>
}