import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import style from './CreateBooks.module.css'

import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {
    const navigate = useNavigate();

    /* DEFINE O STATE DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([])

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DE LIVRO */
    const [book, setBook] = useState({})

    /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
    function handlerChangeBook(event) {
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book)
    }

    /* CAPTURA OS DADOS DA SELECT */
    function handleChangeCategory(event) {
        setBook({...book, cod_categoria: event.target.value});
        console.log(book);
    }

    /* RECUPERAR OS DADOS DE CAREGORIAS DA APIREST */
    useEffect(()=>{
        fetch('http://localhost:5000/listagemCateorias',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*', // asteristico significa que pega tudo
                'Acess-Control-Allow-Headers':'*'
            }
        }).then(
            (resp)=>
                // console.log("RESPOSTA: " + resp)
                resp.json()
            
        ).then(
            (data)=>{
                console.log('DATA: ' + data.data[3].nome_categoria)
                setCategorias(data.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    },[])

    /* INSERÇÃO DOS DADOS DE LIVRO */
    function createBook(book) {
        
        console.log(JSON.stringify(book))

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
                navigate('/listBooks',{state:'LIVRO CADASTRADO COM SUCESSO!'});
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

    return (

        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVROS</h1>

            <form onSubmit={submit}>

                <Input
                    type='text'
                    name='nome_livro'
                    placeHolder='Digite o nome do seu livro aqui'
                    text='Titulo do livro'
                    handlerChangeBookProp={handlerChangeBook}
                />

                <Input
                    type='text'
                    name='autor_livro'
                    placeHolder='Digite o nome do autor'
                    text='Nome do autor'
                    handlerChangeBookProp={handlerChangeBook}
                />

                <Input
                    type='text'
                    name='descricao_livro'
                    placeHolder='Digite a descrição do livro'
                    text='Descrição do livro'
                    handlerChangeBookProp={handlerChangeBook}
                />

                <Select
                    name='categoria'
                    text='Escolha uma categoria de livro'
                    options={categorias}
                    handleChangeCategory={handleChangeCategory}
                />

                <Button
                    rotulo='Cadastrar livro'
                />

            </form>

        </section>

    )
}

export default CreateBooks