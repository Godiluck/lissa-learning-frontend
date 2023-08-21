import React from 'react';
import s from './style.module.scss'

interface IProps {
    field: string,
    title: string,
    callback: (field: string, val: string) => void,
    type: string,
    isDisabled?: boolean,
    value?: string,
}

const InputForm: React.FC<IProps> = ({ field, title, callback, type, isDisabled = false, value = undefined }) => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>{title}:</p>
            <input style={isDisabled ? {border: "1px solid black"} : {}} value={value} disabled={isDisabled} type={type} onChange={(e) => callback(field, e.target.value)} className={s.input}/>
        </div>
    );
};

export default InputForm;