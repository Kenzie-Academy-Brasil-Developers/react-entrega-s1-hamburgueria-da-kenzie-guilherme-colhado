/* eslint-disable jsx-a11y/alt-text */
import './style.css'

export default function Carro({carro, setCarro}){
    const remove = id => setCarro(carro.filter(produto => produto.id!==id))
    const addOrRemove = (operacao, produto) =>{
        if(operacao === '-'){
            setCarro(carro.map(car=> {
                if(car.id === produto.id) car.quantidade-=1
                return car
            }))
            if(produto.quantidade < 1){
                remove(produto.id)
            }
        }else{ 
            setCarro(carro.map(car=> {
                if(car.id === produto.id) car.quantidade+=1
                return car
            }))
        }
    }
    return <div className='carrinho'>
        <h1>Carrinho de Compras</h1>
        {carro.length>0 ? 
            <div className='habitado'>
                <ul>
                    {
                        carro.map(produto=>
                            <li key={produto.id}>
                                <figure>
                                    <img src={produto.img}/>
                                </figure>
                                <div className='info'>
                                    <h4>{produto.name}</h4>
                                    <p>{produto.category}</p>
                                    <p><button onClick={()=>addOrRemove('-', produto)}>-</button>{produto.quantidade}<button onClick={()=>addOrRemove('+', produto)}>+</button></p>
                                </div>
                                <div className='remover'>
                                    <button onClick={()=>remove(produto.id)}>Remover</button>
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