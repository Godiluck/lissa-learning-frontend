import React, {useEffect, useRef, useState} from 'react';
import s from './style.module.scss'
import Hamburger from 'hamburger-react'
import Logo from "../../svgs/Logo";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import useClickOutside from "../../hooks/useClickOutside";
import Modal from "../Modal/Modal";
import LoginModalChild from "./components/LoginModalChild/LoginModalChild";

interface navNode {
    name: string,
    pathTo: string,
}

export const Header = () => {
    const {externalId} = useAppSelector((state) => state.userReducer)
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const navNodes: navNode[] = [
        {name: "Выпускники", pathTo: "/graduates"},
        {name: "Блог", pathTo: "/blog"},
        {name: "О нас", pathTo: "/about"},
        externalId === '' ?
            {name: "Вход", pathTo: "/auth"} :
            {name: "Профиль", pathTo: `lk/${externalId}/profile`},
    ]

    const navRef = useRef(null)

    useEffect(() => {
        if (isLogin) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isLogin])

    useClickOutside(isOpen, () => {isOpen && setTimeout(() => setIsOpen(false), 100)}, navRef)

    return (
        <>
            {isLogin && <Modal child={<LoginModalChild onClose={() => setIsLogin(false)}/>} onClose={() => setIsLogin(false)}/>}
            <div className={s.wrapper}>
                <Link to='/' className={s.logoWrapper}>
                    <span className={s.logoWrapperText}>Lissa</span>
                    <Logo/>
                    <span className={s.logoWrapperText}>Learning</span>
                </Link>
                <div className={s.headerBtns}>
                    {!externalId && <button onClick={() => setIsLogin(!isLogin)} className={s.loginBtn}>Войти</button>}
                    <Hamburger color="#FFFFFF" toggled={isOpen} onToggle={() => {
                        if (isOpen) {
                            setIsOpen(false)
                        } else {
                            setIsOpen(true)
                        }
                    }}/>
                </div>
            </div>
            <ul ref={navRef} className={`${s.burgerMenu} ${isOpen ? s.open : ""}`}>
                {navNodes.map((node: navNode) => (
                    <li onClick={() => setIsOpen(false)} key={node.name} className={s.navItem}>
                        <Link className={s.navItemLink} to={node.pathTo}>{node.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};