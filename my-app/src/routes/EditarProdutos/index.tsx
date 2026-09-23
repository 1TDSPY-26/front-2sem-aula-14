import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { TipoProduto } from "../../types/types";

export default function EditarProdutos() {

    const { id } = useParams<{id:string}>();

    const[produto,setProduto] = useState<TipoProduto>({} as TipoProduto);

    useEffect( ()=>{

        const carregarProduto = async()=>{
            
            try {
                const response = await fetch(`http://localhost:3001/produtos/${id}`);
    
                if(!response.ok){
                    throw new Error("Produto não encontrado!");
                }

                const data:TipoProduto = await response.json();
                console.log(data);
                setProduto(data);

            } catch (error) {
                console.error(error);
            }
        }
        carregarProduto();
    },[]);

    // const produto = listaProdutos.find( ( p )=> p.id === Number(id));
    
    return (
        <main>
            <h2>Editar Produtos</h2>
            <p>Página para editar produtos.</p>

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