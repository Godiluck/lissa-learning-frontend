import React, {useState} from 'react';
import {useInputFormStyles} from "./InputForm.styled";
import PasswordEyeOpen from "../../../svgs/PasswordEyeOpen";

interface IProps {
    field: string,
    title: string,
    callback: (field: string, val: string) => void,
    type?: string,
    isDisabled?: boolean,
    value?: string,
    background?: string,
    placeholder?: string,
    isEye?: boolean,
    autocomplete?: string | undefined,
}

const InputForm: React.FC<IProps> = ({
                                         field,
                                         title,
                                         callback,
                                         type = "text",
                                         isDisabled = false,
                                         value = undefined,
                                         background = "#FFFFFF",
                                         placeholder = '',
                                         isEye = false,
                                         autocomplete = undefined,
                                     }) => {

    const {classes} = useInputFormStyles({background})

    const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false)

    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>{title}:</p>
            <div className={classes.inputWrapper}>
                <input autoComplete={autocomplete ? autocomplete : "false"} placeholder={placeholder} style={isDisabled ? {border: "1px solid black"} : {}} value={value}
                       disabled={isDisabled} type={isEye ? isEyeOpen ? 'text' : 'password' : type}
                       onChange={(e) => callback(field, e.target.value)}
                       className={classes.input}/>
                {isEye && (
                    <div onClick={() => setIsEyeOpen(!isEyeOpen)} className={classes.eyeWrapper}><PasswordEyeOpen/>
                    </div>)}
            </div>
        </div>
    );
};

export default InputForm;