import style from './CardBook.module.css'
import Button from './Button'

const CardBooks = ({ titulo, autor, imagem, cod_livro }) => {
    
    return(
        <div className={style.cardBooks}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img src={imagem} alt={titulo} title={{titulo}} />
            <div>
                <Button label='DETALHE' router='/detailBook/' cod_livro={cod_livro} />
            </div>
        </div>
    )
}

export default CardBooks