import React from 'react';
import {Link} from "react-router-dom";
import s from './style.module.scss'
import {useAppSelector} from "../../hooks/redux";

const HomepageLayout = () => {
    const {externalId} = useAppSelector((state) => state.userReducer)
    return (
        <div className={s.wrapper}>
            <p>Ето хоумпейдж (сам делал)</p>
             <p>Все интересное тут:</p>
            <Link to={'/auth'}>Вход</Link>
            <Link to={externalId === '' ? '/auth' : `lk/${externalId}/profile`}>Профиль</Link>
        </div>
    );
};

export default HomepageLayout;