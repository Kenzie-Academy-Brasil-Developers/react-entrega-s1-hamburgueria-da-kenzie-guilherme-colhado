import './style.css'
import { useState } from 'react'

export default function ListaProdutos({listaProdutos, carro, setCarro}){
    const [idCarro, setIdCarro] = useState(1)
    function addAoCarro(produto){
        const produtoCarro = {idCarro,...produto}
        setCarro([...carro, produtoCarro])
        setIdCarro(previusIdCarro => previusIdCarro+1)
    }
    return <div className='produtos'>
        {listaProdutos.map(produto => <div key={produto.id}>
            <figure>
                <img src={produto.img} alt="" />
            </figure>
            <div className="info">
                <h3 className='name'>{produto.name}</h3>
                <p className='category'>{produto.category}</p>
                <p className='price'>{'R$'} {`${produto.price.toFixed(2)}`.replace('.',',')}</p>
                <button onClick={() => addAoCarro(produto)}>Adicionar</button>
            </div>
        </div>)}
    </div>
}