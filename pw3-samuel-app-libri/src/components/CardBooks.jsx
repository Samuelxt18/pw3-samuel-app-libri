import style from './CardBook_modules.css'
import Button from './Button'


const bookCard = ({cod_livro,titulo,autor,imagem})=>{
    return (
        <div className={style.CardBooks}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className = {style.autor} >{autor}</p>
            <img src = {imagem} alt ={titulo} title={{titulo}}></img>
            <div>
                <Button label= 'DETALHE' router='/DetailBook' cod_livro={cod_livro}></Button>

            </div>
            
        </div>
    )
}
 
export default bookCard