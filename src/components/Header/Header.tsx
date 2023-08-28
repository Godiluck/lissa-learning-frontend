import React from 'react';
import s from './style.module.scss'
import {Logo} from "../../svgs/Logo";
import {LogoText} from "../../svgs/LogoText";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

interface navNode {
    name: string,
    pathTo: string,
}

export const Header = () => {
    const {id} = useAppSelector((state) => state.userReducer)
    const navNodes: navNode[] = [
        {name: "Выпускники", pathTo: "/graduates"},
        {name: "Блог", pathTo: "/blog"},
        {name: "О нас", pathTo: "/about"},
        id === 0 ?
            {name: "Вход", pathTo: "/auth"} :
            {name: "Профиль", pathTo: "lk/UUID/profile"},
    ]

    return (
        <div className={s.wrapper}>
            <Link to='/' className={s.logoWrapper}>
                <Logo/>
                <LogoText/>
            </Link>
            <div className={s.navWrapper}>
                <ul className={s.nav}>
                    {navNodes.map((node: navNode) => (
                        <li key={node.name} className={s.navItem}>
                            <Link className={s.navItemLink} to={node.pathTo}>{node.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};