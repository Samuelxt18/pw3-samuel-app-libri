import { Outlet, Link } from 'react-router-dom' 

import style from './NavBar.module.css'

const NavBar = () =>{
    return(

        <>
            <nav className={style.navbar}>
                <ul className={style.list}>

                    <Link to='/'>
                    <li className={style.item}><img className = {style.logo} src="./book.png"/> </li>
                    </Link>

                    <Link to='/'>
                    <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/createBooks'>
                    <li className={style.item}>CADASTRAR LIVRO</li>
                    </Link>

                    <Link to='listBooks'>
                    <li className={style.item}>LISTAR LIVRO</li>
                    </Link>

                </ul>

            </nav>

            <Outlet/>

        </>
    )
}

export default NavBar