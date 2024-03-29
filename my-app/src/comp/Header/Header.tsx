import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

interface HeaderPropsType {
    login: string
    isAuth: boolean
}


const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src='https://cs6.pikabu.ru/avatars/140/v140895.jpg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;