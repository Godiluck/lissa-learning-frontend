import React, {useState} from 'react';
import s from './style.module.scss'
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import {$AxiosAuthService} from "../../../../utils/interceptor";
import {getLoginData} from "../../../../store/reducers/UserSlice";
import {fetchUserData} from "../../../../store/reducers/ActionCreators";
import axios from "axios";
import {snackbarTypes} from "../../../../models/common";
import {useNavigate} from "react-router-dom";
import {useSnackbar} from "notistack";
import {useAppDispatch} from "../../../../hooks/redux";

interface IProps {
    onClose: () => void;
}

const LoginModalChild: React.FC<IProps> = ({ onClose }) => {
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    const dispatch = useAppDispatch()
    const [fields, setFields] = useState({
        login: '',
        password: ''
    })

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
        enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    const logIn = async () => {
        try {
            const response = await $AxiosAuthService.post(`api/auth/signin`, {
                username: fields.login,
                password: fields.password
            })
            if (response.status === 200) {
                localStorage.setItem('externalId', response.data.externalId)
                localStorage.setItem('token', response.data.token)
                await dispatch(getLoginData(response.data))
                await dispatch(fetchUserData())
                navigate(`/lk/${response.data.externalId}/profile`)
                onClose()
                return
            }
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return showSnackbar("Произошла ошибка", snackbarTypes.error)
            } else {
                return console.log(e)
            }
        }
    }

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    const isActive = fields.login !== "" && fields.password !== ""

    return (
        <div className={s.wrapper}>
            <div className={s.inputFormBlock}>
                <InputForm type="text" field="login" title="" value={fields.login} callback={onChange} placeholder="Логин"/>
                <InputForm field="password" title="" value={fields.password} isEye callback={onChange} placeholder="Пароль"/>
            </div>
            <button onClick={() => isActive ? logIn() : null} className={isActive ? s.loginBtn : s.loginBtnDisabled}>Войти</button>
        </div>
    );
};

export default LoginModalChild;