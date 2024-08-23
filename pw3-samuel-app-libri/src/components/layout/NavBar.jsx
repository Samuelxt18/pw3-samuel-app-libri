import style from './NavBar.module.css'

const NavBar = () =>{

    return(
        <nav className={style.navBar}>

        <ul className={style.list}>
            <li className={style.item}><img className={style.logo} src="./book.png"/></li>
            <li className={style.item}>Home</li>
            <li className={style.item}>cadastrar</li>
            
        </ul>
        </nav>
    )
}

export default NavBar;