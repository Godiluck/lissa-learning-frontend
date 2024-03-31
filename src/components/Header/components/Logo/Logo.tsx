import s from "./style.module.scss";
import LogoIcon from "../../../../svgs/LogoIcon";
import {Link} from "react-router-dom";
import React from "react";

export const Logo = () => {
    return (
        <Link to='/' className={s.logoWrapper}>
            <LogoIcon size={60}/>
            <div className={s.logoTextWrapper}>
                <div className={s.logoMainText}>
                    <span>L</span>
                    <span>I</span>
                    <span>S</span>
                    <span>S</span>
                    <span>A</span>
                </div>
                <div className={s.logoSecondaryText}>
                    <span>L</span>
                    <span>E</span>
                    <span>A</span>
                    <span>R</span>
                    <span>N</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
            </div>
        </Link>
    )
}