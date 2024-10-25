import { Link } from 'react-router-dom';
import style from './Button.module.css'
const Button = ({label,router})=> {
    return(
        <div className ={style.buttoncontainer}>
            <button>{label}</button>

            <Link to={`${router} ${cod_livro}`}>
                <button>{label}</button>
            </Link>
        
        </div>

    )
}
export default Button;