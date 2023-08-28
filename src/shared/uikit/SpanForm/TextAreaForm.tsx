import React from 'react';
import {useTextAreaFormStyles} from "./TextAreaForm.styled";

interface IProps {
    field: string,
    title: string,
    callback: (field: string, val: string) => void,
    background?: string,
    minHeight?: string,
    placeholder?: string,
}

const TextAreaForm: React.FC<IProps> = ({ field, title, callback, background = "#FFFFFF", minHeight = "80px", placeholder = '' }) => {

    const { classes } = useTextAreaFormStyles({ background, minHeight })

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>{title}:</p>
            <textarea placeholder={placeholder} onChange={(e) => callback(field, e.target.value)} className={classes.textArea}/>
        </div>
    );
};

export default TextAreaForm;