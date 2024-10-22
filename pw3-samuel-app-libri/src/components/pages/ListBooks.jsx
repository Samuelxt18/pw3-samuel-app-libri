import React from "react";
import {useState, useEffect} from 'react';
import style from './ListBooks.module.css';
import BookCard from "../CardBooks";
import Container from '../layout/Container';
import Containerjsx from '../layout/Container.jsx';
import cavernas from '../../assets/livros/cavernas_aco.jpg'

const ListBooks = () => {

    /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
    const [books, setBooks] = useState([]);

    /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
    useEffect(()=>{

        fetch('http://localhost:5000/listagemLivros', {
            method: 'GET',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
                console.log('LIVROS: ' + data.data);
                setBooks(data.data);
                console.log('STATE: ' + books);
            })
            .catch((err)=>{console.log(err)});

    }, []);

    return (

        <Container>

            <section className={style.list_book_container}>
                
                <h1>LIST BOOKS</h1>

                <Containerjsx>
                    {
                        books.map((book)=>(
                            // console.log(book.nome_livro)
                            <BookCard
                                cod_livro={book.cod_livro}
                                titulo={book.nome_livro}
                                autor={book.autor_livro}
                                imagem={cavernas}
                                key={book.cod_livro}
                            />
                        ))
                    }
                </Containerjsx>

            </section>

        </Container>
    )
}

export default ListBooks
