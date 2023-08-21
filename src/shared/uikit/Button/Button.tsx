import React from 'react';
import s from './style.module.scss'
import {useButtonStyles} from "./Button.styled";

interface IProps {
    onClick: () => void,
    text: string,
    textColor?: string | null,
    background?: string | null,
    width?: number | null,
}

const Button: React.FC<IProps> = ({ textColor, background, text, onClick, width }) => {
    const {classes} = useButtonStyles({ textColor, background, width })
    return (
        <button onClick={onClick} className={classes.wrapper}>
            <p className={classes.text}>{ text }</p>
        </button>
    );
};

export default Button;