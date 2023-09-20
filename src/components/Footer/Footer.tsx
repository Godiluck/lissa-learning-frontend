import React from 'react';
import s from './style.module.scss'
import Logo from "../../svgs/Logo";
import TelegramContactIcon from "../../svgs/TelegramContactIcon";

export const Footer = () => {
    return (
        <div className={s.wrapper}>
            <Logo/>
            <div className={s.contactsBlock}>
                <p className={s.contactEmail}>Info@lissa-learning.ru</p>
                <div className={s.contactTg} onClick={() => window.open("https://t.me/lissa_learning_bot/", "_blank")}>
                    <TelegramContactIcon />
                </div>
            </div>
        </div>
    );
};