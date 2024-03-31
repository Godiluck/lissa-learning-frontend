import s from './style.module.scss'
import cn from 'classnames';
import React from "react";

export const MobileNavbar = ({ isActive, setIsActive, items, setIsEnroll }) => {
    return (
        <nav className={cn(s.navBar, { [s.active]: isActive })} onClick={() => setIsActive(false)}>
            <div className={s.blur}/>
            <div className={s.content} >
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.pathTo}>{item.name}</a>
                        </li>)}
                </ul>
                <button onClick={() => setIsEnroll(true)} className={s.enrollBtn}>Поступить</button>
            </div>
        </nav>
    )
}