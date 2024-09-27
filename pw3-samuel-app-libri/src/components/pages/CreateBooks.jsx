import React from "react";
import style from './CreateBooks.module.css'
import Input from "../forms/Input";
import Select from '../forms/Select'
import Button from "../forms/Button";
import { useState, useEffect } from "react";

const CreateBooks = () =>{

    // define o state e dados das categorias
    const [categorias,setCategorias] = useState([])
    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})
    /* recupera os dados de categoria api rest*/
   
    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

    useEffect(() =>{
        fetch('http://localhost:5000/listagemCateorias', {
            method:'GET',
            headers:{
                'Content-Type':'application/jason',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*',
            }
        }).then(
            (resp) =>
                // console.log('RESPOSTA' + resp)
                resp.json()
        ).then(
            (data)=> {
                console.log('DATA' + data.data [0].nome_categoria)
                setCategorias(data.data)
            } 
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    },[]);

    /* INSERÇÃO DOS DADOS DE LIVRO */
        function createBook(book) {
            
            // console.log(JSON.stringify(book))

            fetch('http://localhost:5000/inserirLivro', {
                    method:'POST',
                    mode:'cors',
                    headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'*'
                    },
                    body: JSON.stringify(book)
            })
            .then(
                    (resp)=>resp.json()
            )
            .then(
                    (data)=>{
                    console.log(data);
                    // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
                    }
            )
            .catch(
                    (err)=>{ console.log(err) }
            )
    }


    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createBook(book);
    }

    return(

        <section className={style.CreateBooks_container}>

        <h1>CADAIXTRO DE LIVROIX</h1>

        <form submit={submit}></form>
        
        <Input
            type='text'
            name='nome_livro'
            placeHolder='digite o nome do seu livro aqui'
            text='Titulo do livro'
            handlerChangeBook={handlerChangeBook}
        />

        <Input
            type='text'
            name='autor_livro'
            placeHolder='digite o numero do ator'
            text='Nome do ator'
            handlerChangeBook={handlerChangeBook}
        />

        <Input
            type='text'
            name='descricao_livro'
            placeHolder='digite a descriçao do livro'
            text='Descrição do livro'
            handlerChangeBook={handlerChangeBook} //props ={função}
        />

        <Select
            name='categoria'
            text='Escolha uma categoria de livro'
            options={categorias}
        />

        <Button
            rotulo='Cadastrar Livro'
        />

        </section>
    )
}

export default CreateBooks