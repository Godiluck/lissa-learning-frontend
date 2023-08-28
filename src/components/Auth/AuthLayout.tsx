import React, {useState} from 'react';
import s from './style.module.scss'
import InputForm from "../../shared/uikit/InputForm/InputForm";
import Button from "../../shared/uikit/Button/Button";
import {useSnackbar} from "notistack";
import {snackbarTypes} from "../../models/common";
import axios, {AxiosError} from "axios";
import {useAppDispatch} from "../../hooks/redux";
import {getUserData} from "../../store/reducers/UserSlice";
import {useNavigate} from "react-router-dom";
import {$AxiosUserService} from "../../utils/interceptor";

interface IFields {
    login: string,
    password: string,
}

interface IFieldsReg {
    username: string,
    email: string,
    password: string,
    rePassword: string,
    telegramNickname: string,
}

const AuthLayout = () => {
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const dispatch = useAppDispatch()
    const [fields, setFields] = useState<IFields>({
        login: '',
        password: '',
    })
    const [fieldsReg, setFieldsReg] = useState<IFieldsReg>({
        username: '',
        email: '',
        password: '',
        rePassword: '',
        telegramNickname: '',
    })
    const [isReg, setIsReg] = useState<boolean>(false)

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    const onChangeReg = (field: string, val: string) => {
        setFieldsReg(prev => ({...prev, [field]: val}))
    }

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
        enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    const isValid = () => !!fields.login && !!fields.password

    const isValidReg = () => !!fieldsReg.username && fieldsReg.rePassword === fieldsReg.password && fieldsReg.password.length >= 6 && !!fieldsReg.email && !!fieldsReg.telegramNickname

    const toggleReg = () => setIsReg(!isReg)

    const logIn = async () => {
        try {
            const response = await $AxiosUserService.post(`api/auth/signin`, {
                username: fields.login,
                password: fields.password
            })
            if (response.status === 200) {
                // TODO
                // localStorage.setItem('externalId', response.data.externalId)
                dispatch(getUserData(response.data))
                navigate('/lk/UUID/profile')
                return
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return showSnackbar(e.response?.data.message, snackbarTypes.error)
            } else {
                return console.log(e)
            }
        }
    }

    const register = async () => {
        try {
            const response = await $AxiosUserService.post(`api/auth/signup`, {
                username: fieldsReg.username,
                email: fieldsReg.email,
                password: fieldsReg.password,
                telegramNickname: fieldsReg.telegramNickname,
            })
            if (response.status === 200) {
                setFields({ login: fieldsReg.username, password: fieldsReg.password })
                return logIn()
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return showSnackbar(e.response?.data.message, snackbarTypes.error)
            } else {
                return console.log(e)
            }
        }
    }

    return (
        <div className={s.wrapper}>
            {!isReg ? (
                <div className={s.authWrapper}>
                    <InputForm type="text" value={fields.login} autocomplete="username" field="login" title="Логин"
                               callback={onChange}/>
                    <InputForm field="password" value={fields.password} autocomplete="password" title="Пароль" isEye
                               callback={onChange}/>
                    <div className={s.buttonWrapper}>
                        <Button isActive={isValid()} onClick={logIn} text="Вход"/>
                    </div>
                    <p className={s.changeOption}>Впервые? <span onClick={toggleReg}
                                                                 className={s.changeOptionBtn}>Зарегистрироваться!</span>
                    </p>
                </div>
            ) : (
                <div className={s.authWrapper}>
                    <InputForm type="text" value={fieldsReg.username} field="username" title="Логин"
                               callback={onChangeReg}/>
                    <InputForm isEye field="password" value={fieldsReg.password} title="Пароль" callback={onChangeReg}/>
                    <InputForm isEye field="rePassword" value={fieldsReg.rePassword} title="Повторите пароль"
                               callback={onChangeReg}/>
                    <InputForm type="email" field="email" value={fieldsReg.email} title="Email" callback={onChangeReg}/>
                    <InputForm type="text" field="telegramNickname" value={fieldsReg.telegramNickname}
                               title="Telegram Nickname" callback={onChangeReg}/>
                    <div className={s.buttonWrapper}>
                        <Button isActive={isValidReg()} onClick={register} text="Регистрация"/>
                    </div>
                    <p className={s.changeOption}>Уже зарегистрированы? <span onClick={toggleReg}
                                                                              className={s.changeOptionBtn}>Войти!</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default AuthLayout;