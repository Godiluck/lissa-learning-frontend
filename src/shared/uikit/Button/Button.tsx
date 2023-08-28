import React from 'react';
import s from './style.module.scss'
import {useButtonStyles} from "./Button.styled";

interface IProps {
    onClick: () => void,
    text: string,
    textColor?: string | null,
    background?: string | null,
    width?: number | null,
    isActive?: boolean,
    value?: string,
}

const Button: React.FC<IProps> = ({ textColor, background, text, onClick, width, isActive = true}) => {
    const {classes} = useButtonStyles({ textColor, background, width })
    return (
        <button onClick={isActive ? onClick : () => null} className={isActive ? classes.wrapper : classes.wrapperInactive}>
            <p className={classes.text}>{ text }</p>
        </button>
    );
};

export default Button;