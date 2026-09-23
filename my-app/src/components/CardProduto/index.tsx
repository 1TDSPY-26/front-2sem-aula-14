
export default function CardProduto(props:{nome:string,estoque:number,preco:number}) {
  return (
    <div>
        <h3>{props.nome}</h3>
        <figure>
            <img src="https://via.placeholder.com/150" alt="Imagem do produto" />
            <figcaption>Nome do produto</figcaption>
        </figure>
        <p>Estoque: {props.estoque} unidades</p>
        <p>R$ {props.preco.toFixed(2)}</p>
        <button>Editar</button>
        <button>Excluir</button>
    </div>
  )
}
