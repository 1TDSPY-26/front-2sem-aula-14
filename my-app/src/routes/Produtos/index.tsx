<<<<<<< HEAD
import { useEffect, useState } from "react";
import type { TipoProduto } from "../../types/types";

export default function Produtos() {

    const [produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {

        //Realizando o GetAllProdutos
        async function carregarProdutos() {
            try {

                const response = await fetch("http://localhost:3001/produtos");

                if (!response.ok) {
                    throw new Error("A listagem dos produtos falhou!");
                }

                const data: TipoProduto[] = await response.json();
                setProdutos(data);

            } catch (error) {
                console.error(error);
=======
import { useState, useEffect } from 'react';
import { listaProdutos } from '../../data/listaProdutos';
import type { TipoProduto } from '../../types/types';


export default function Produtos() {

    const[produtos, setProdutos] = useState<TipoProduto[]>([]);

    useEffect( () => {

        async function carregarProdutos(){
         
            try{

                const response = await fetch("http://localhost:3001/produtos");

                if(!response.ok){

                }
>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
            }

        }

<<<<<<< HEAD
        carregarProdutos();

=======
>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
    }, []);

    return (
        <main>
<<<<<<< HEAD
            <h2>Produtos</h2>

            <div>
                <table border={1}>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>PREÇO</th>
                            <th>ESTOQUE</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>

                    <tbody>
                        {produtos.map((p, i) => (
                            <tr key={i}>
                                <td>{p.id}</td>
                                <td>{p.nome}</td>
                                <td>{p.preco}</td>
                                <td>{p.estoque}</td>
                                <td>EDITAR/EXCLUIR</td>
                            </tr>
                        ))}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colSpan={5}>Quantidade de produtos: {produtos?.length}</td>
                        </tr>
                    </tfoot>

                </table>
            </div>


=======
            <h1>Página de Produtos</h1>
>>>>>>> 6b76bea6d6cbe9cff0de4cc0ac9a0912be8794e6
        </main>
    );
}