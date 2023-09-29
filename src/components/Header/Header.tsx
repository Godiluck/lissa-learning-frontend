import React, {useRef, useState} from 'react';
import s from './style.module.scss'
import Logo from "../../svgs/Logo";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import useClickOutside from "../../hooks/useClickOutside";
import Modal from "../Modal/Modal";
import LoginModalChild from "./components/LoginModalChild/LoginModalChild";
import useMediaQuery from "../../hooks/useMediaQuery";
import {SCREENS} from "../../utils/consts";

// interface navNode {
//     name: string,
//     pathTo: string,
// }

export const Header = () => {
    const {externalId} = useAppSelector((state) => state.userReducer)
    const [isOpen, setIsOpen] = useState(false)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const isMobileMiddle = useMediaQuery(SCREENS.mobileMiddle)
    const isTablet = useMediaQuery(SCREENS.tablet)
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

    const getLogoSize = () => {
        if (isMobileMiddle) {
            return 35
        }
        if (isTablet) {
            return 50
        }
        return 70
    }

    return (
        <>
            <Modal isModal={isLogin} child={<LoginModalChild onClose={() => setIsLogin(false)}/>}
                   onClose={() => setIsLogin(false)}/>
            <div className={s.wrapper}>
                <Link to='/' className={s.logoWrapper}>
                    {!isMobileMiddle && <span className={s.logoWrapperText}>Lissa</span>}
                    <Logo size={isMobileMiddle ? 35 : 70}/>
                    {!isMobileMiddle && <span className={s.logoWrapperText}>Learning</span>}
                </Link>
                <div className={s.headerBtns}>
                    {!externalId && <button onClick={() => setIsLogin(!isLogin)} className={s.loginBtn}>Войти</button>}
                </div>
            </div>
        </>
    );
};