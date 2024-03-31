import React, {FC} from "react";
import s from "./style.module.scss";

type Props = {
    mainTextColor?: string
    secondTextColor?: string
}

export const LogoText: FC<Props> = ({ mainTextColor, secondTextColor }) => {
    return (
        <div className={s.logoTextWrapper}>
            <div className={s.logoMainText}>
                <span style={{ color: mainTextColor }}>L</span>
                <span style={{ color: mainTextColor }}>I</span>
                <span style={{ color: mainTextColor }}>S</span>
                <span style={{ color: mainTextColor }}>S</span>
                <span style={{ color: mainTextColor }}>A</span>
            </div>
            <div className={s.logoSecondaryText}>
                <span style={{ color: secondTextColor }}>L</span>
                <span  style={{ color: secondTextColor }}>E</span>
                <span  style={{ color: secondTextColor }}>A</span>
                <span  style={{ color: secondTextColor }}>R</span>
                <span  style={{ color: secondTextColor }}>N</span>
                <span  style={{ color: secondTextColor }}>I</span>
                <span  style={{ color: secondTextColor }}>N</span>
                <span  style={{ color: secondTextColor }}>G</span>
            </div>
        </div>
    )
}