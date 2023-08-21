import React, {useState} from 'react';
import s from './style.module.scss'
import InputForm from "../../shared/uikit/InputForm/InputForm";
import Button from "../../shared/uikit/Button/Button";
import {useSnackbar} from "notistack";
import {snackbarTypes} from "../../models/common";
import axios from "axios";
import {useAppDispatch} from "../../hooks/redux";
import {getUserData} from "../../store/reducers/UserSlice";
import {useNavigate} from "react-router-dom";

interface IFields {
    login: string,
    password: string,
}

const AuthLayout = () => {
    const navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useAppDispatch()
    const [fields, setFields] = useState<IFields>({
        login: '',
        password: '',
    })
    const [isReg, setIsReg] = useState<boolean>(false)

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
         enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    const isValid = () => !!fields.login && !!fields.password

    const logIn = async () => {
        if (isValid()) {
            const response = await axios.post(`${process.env.REACT_APP_USER_SERVICE_ENDPOINT}api/auth/signin`, {
                username: fields.login,
                password: fields.password
            })
            if (response.status === 200) {
                dispatch(getUserData(response.data))
                navigate('/')
                return
            } else {
                return showSnackbar(response.data.message, snackbarTypes.error)
            }
        }
        return showSnackbar("Заполните все поля", snackbarTypes.error)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.authWrapper}>
                <InputForm type="text" field="login" title="Логин" callback={onChange}/>
                <InputForm type="password" field="password" title="Пароль" callback={onChange}/>
                <div className={s.buttonWrapper}>
                    <Button onClick={() => logIn()} text="Вход" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;