import style from './Button.module.css'
const Button = ({label})=> {
    return(
        <div className ={style.buttoncontainer}>
            <button>{label}</button>
        </div>

    )
}
export default Button;