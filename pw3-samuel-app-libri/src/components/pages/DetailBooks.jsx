import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from '/src/components/pages/DetailBook.modules.css'
import caverna from '../../assets/livros/cavernas_aco.jpg'

const detailBook = () => {
    /*recuperar o cod do livro*/
    const {cod_livro} = useParams()
    console.log('codigo do livro: ' + cod_livro)
    /*criação do state dos bancos do livro -*/
    const[book, setBook] = useState({})

    
/* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
useEffect(()=>{

    fetch(`http://localhost:5000/listagemLivro/${id}`, {
        method: 'GET',
        mode:'cors',
        headers: {
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
    },
    })
        .then((resp)=>resp.json())
        .then((data)=>{
        setBook(data.data);
        console.log(data.data);
    })
    .catch((err)=>{console.log(err)});

    },[]);

    return(
        <div className={style.grid}>

        <div className={style.container_img}>
                        <img className={style.img_book_detail} src={cavernas} alt='Capa do livro: As cavernas de aço' />
                    </div>

                    <span className={style.titulo}>{book.nome_livro}</span>
                <span className={style.autor}>{book.autor_livro}</span>

                <span className={style.descricao}>
                    {book.descricao_livro}
                </span>
        

        <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                    />

                    <Button 
                        label='EXCLUIR'
                    />

                </div>
        </div>
    )
}


export default detailBook;