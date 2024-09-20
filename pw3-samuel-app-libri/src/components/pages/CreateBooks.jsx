import React from "react";
import style from './CreateBooks.module.css'
import Input from "../forms/Input";
import Select from '../forms/Select'
import Button from "../forms/Button";
import { useState, useEffect } from "react";

const CreateBooks = () =>{
/* recupera os dados de categoria api rest*/
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
            } 
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    },[]);
    return(

        <section className={style.CreateBooks_container}>

        <h1>CADAIXTRO DE LIVROIX</h1>

        <Input
            type='text'
            name='txt_livro'
            placeHolder='digite o nome do seu livro aqui'
            text='Titulo do livro'
        />

        <Input
            type='text'
            name='txt_autor'
            placeHolder='digite o numero do ator'
            text='Nome do ator'
        />

        <Input
            type='text'
            name='txt_descricao_livro'
            placeHolder='digite a descriçao do livro'
            text='Descrição do livro'
        />

        <Select
            name='categoria'
            text='Escolha uma categoria de livro'
        />

        <Button
            rotulo='Cadastrar Livro'
        />

        </section>
    )
}

export default CreateBooks