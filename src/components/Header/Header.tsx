import React, {useRef, useState} from 'react';
import s from './style.module.scss'
import {Link} from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import useMediaQuery from "../../hooks/useMediaQuery";
import {SCREENS} from "../../utils/consts";
import {MobileNavbar} from "./components/NavBar/MobileNavBar/MobileNavbar";
import {Logo} from "./components/Logo/Logo";
import {DesktopNavBar} from "./components/NavBar/DesktopNavBar/DesktopNavBar";
import {BurgerBtn} from "./components/BurgerBtn/BurgerBtn";


interface navNode {
    name: string,
    pathTo: string,
}

export const Header = ({ setIsEnroll }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const isMobile = useMediaQuery(SCREENS.mobile)

    const navNodes: navNode[] = [
        {name: "Преимущества", pathTo: "#advantages"},
        {name: "Отзывы", pathTo: "#reviews"},
        {name: "Контакты", pathTo: "#contacts"}
    ]

    const navRef = useRef(null)

    useClickOutside(isOpen, () => {
        isOpen && setTimeout(() => setIsOpen(false), 100)
    }, navRef)

    return (
        <>
            <div className={s.wrapper}>
                {isMobile && <BurgerBtn isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />}
                <Link to='/' className={s.logoWrapper}>
                    <Logo />
                </Link>
                {isMobile
                    ? <MobileNavbar
                        isActive={isOpenMenu}
                        setIsActive={setIsOpenMenu}
                        items={navNodes}
                        setIsEnroll={setIsEnroll}
                    />
                    : <DesktopNavBar items={navNodes} /> }
            </div>
        </>
    );
};