import React from 'react';
import {Link} from "react-router-dom";
import s from './style.module.scss'

const HomepageLayout = () => {
    return (
        <div className={s.wrapper}>
            <p>Ето хоумпейдж (сам делал)</p>
             <p>Все интересное тут:</p>
            <Link to={'/auth'}>Вход</Link>
            <Link to={'/lk/UUID/profile'}>Профиль</Link>
        </div>
    );
};

export default HomepageLayout;