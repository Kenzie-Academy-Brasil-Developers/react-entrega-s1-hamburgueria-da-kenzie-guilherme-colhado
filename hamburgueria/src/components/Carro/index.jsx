/* eslint-disable jsx-a11y/alt-text */
import './style.css'

export default function Carro({carro, setCarro}){
    const remove = id => setCarro(carro.filter(produto => produto.idCarro!==id))
    
    return <div className='carrinho'>
        <h1>Carrinho de Compras</h1>
        {carro.length>0 ? 
            <div className='habitado'>
                <ul>
                    {
                        carro.map(produto=>
                            <li key={produto.idCarro}>
                                <figure>
                                    <img src={produto.img}/>
                                </figure>
                                <div className='info'>
                                    <h4>{produto.name}</h4>
                                    <p>{produto.category}</p>
                                </div>
                                <div className='remover'>
                                    <button onClick={()=>remove(produto.idCarro)}>Remover</button>
                                </div>
                            </li>
                        )
                    }
                </ul>
                <div className='total'>
                    <h3>Total</h3>
                    <h4>{'R$'} {`${carro.reduce((a,b)=>a+b.price,0).toFixed(2)}`.replace('.',',')}</h4>
                </div>
                <button onClick={()=>setCarro([])}>Remover Todos</button>
            </div> 
        :
            <div className='vazio'>
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
            </div>
        }
    </div>
}