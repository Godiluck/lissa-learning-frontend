import React, {useRef, useState} from 'react';
import s from './style.module.scss'
import Logo from "../../svgs/Logo";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import useClickOutside from "../../hooks/useClickOutside";
import Modal from "../Modal/Modal";
import LoginModalChild from "./components/LoginModalChild/LoginModalChild";

// interface navNode {
//     name: string,
//     pathTo: string,
// }

export const Header = () => {
    const {externalId} = useAppSelector((state) => state.userReducer)
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    // const navNodes: navNode[] = [
    //     {name: "Выпускники", pathTo: "/graduates"},
    //     {name: "Блог", pathTo: "/blog"},
    //     {name: "О нас", pathTo: "/about"},
    //     externalId === '' ?
    //         {name: "Вход", pathTo: "/auth"} :
    //         {name: "Профиль", pathTo: `lk/${externalId}/profile`},
    // ]

    const navRef = useRef(null)

    useClickOutside(isOpen, () => {
        isOpen && setTimeout(() => setIsOpen(false), 100)
    }, navRef)

    return (
        <>
            <Modal isModal={isLogin} child={<LoginModalChild onClose={() => setIsLogin(false)}/>}
                   onClose={() => setIsLogin(false)}/>
            <div className={s.wrapper}>
                <Link to='/' className={s.logoWrapper}>
                    <span className={s.logoWrapperText}>Lissa</span>
                    <Logo/>
                    <span className={s.logoWrapperText}>Learning</span>
                </Link>
                <div className={s.headerBtns}>
                    {!externalId && <button onClick={() => setIsLogin(!isLogin)} className={s.loginBtn}>Войти</button>}
                </div>
            </div>
        </>
    );
};