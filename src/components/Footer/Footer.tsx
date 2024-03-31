import React from 'react';
import s from './style.module.scss'
import LogoIcon from "../Logo/LogoIcon";
import TelegramContactIcon from "../../svgs/TelegramContactIcon";

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <LogoIcon size={48}/>
            <p className={s.contactEmail}>Info@lissa-learning.ru</p>
            <div className={s.contactTg} onClick={() => window.open("https://t.me/LissaLearning/", "_blank")}>
                <TelegramContactIcon />
            </div>
        </div>
    );
};
