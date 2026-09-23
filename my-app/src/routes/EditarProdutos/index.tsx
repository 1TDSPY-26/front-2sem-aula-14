import { useParams } from "react-router";

const listaProdutos = [
    { id: 1, nome: "Produto 1", preco: 10.0 },
    { id: 2, nome: "Produto 2", preco: 20.0 },
    { id: 3, nome: "Produto 3", preco: 30.0 },
];

<<<<<<< HEAD
=======

>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
export default function EditarProdutos() {

    const { id } = useParams<string >();

<<<<<<< HEAD
    const produto = listaProdutos.find( ( p )=> p.id === Number(id));
    
=======
    const produto = listaProdutos.find((p) => p.id ===  Number(id));

    const estojo = {
        lapis: "Preto",
        caneta: "Esferográfica",
        borracha: "Branca"
    }

    estojo.lapis;
    estojo.caneta;
    //onst {lapis, caneta} = estojo;

    const jogos = ["Sonic", "Mario" ,"Zelda"];

>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
    return (
        <main>
            <h2>Editar Produtos</h2>
            <p>Página para editar produtos.</p>
<<<<<<< HEAD

=======
>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
            {produto ? (
                <div>
                    <p>Nome: {produto.nome}</p>
                    <p>Preço: {produto.preco}</p>
                </div>
            ) : (
                <p>Produto não encontrado.</p>
            )}
        </main>
    );
}