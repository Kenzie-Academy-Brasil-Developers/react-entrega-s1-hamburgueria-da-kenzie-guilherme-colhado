import './style.css'

export default function ListaProdutos({listaProdutos, carro, setCarro}){
    const filtra = (id) => carro.filter(car=>car.id === id)
    function addAoCarro(produto){
        if(filtra(produto.id).length===0 || carro.length===0){
            setCarro([...carro, produto])
        }
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