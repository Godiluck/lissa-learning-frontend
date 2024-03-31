import s from "./style.module.scss";
import cn from "classnames";
import React from "react";

export const BurgerBtn = ({ isOpenMenu, setIsOpenMenu }) => {
    return (
        <div className={cn(s.burgerBtn, { [s.isOpen]: isOpenMenu })} onClick={() => setIsOpenMenu(currentState => !currentState)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}