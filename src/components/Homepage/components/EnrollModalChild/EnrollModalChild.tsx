import React, {useState} from 'react';
import s from "./style.module.scss";
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import {snackbarTypes} from "../../../../models/common";
import {useSnackbar} from "notistack";
import {$AxiosAdminService} from "../../../../utils/interceptor";
import axios from "axios";

interface IProps {
    onClose: () => void;
}

const EnrollModalChild: React.FC<IProps> = ({ onClose }) => {
    const {enqueueSnackbar} = useSnackbar()
    const [fields, setFields] = useState({
        name: '',
        mail: '',
        phone: '',
        telegram: '',
    })
    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
        enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    const sendEnrollRequest = async () => {
        try {
            const response = await $AxiosAdminService.post(`v1/learning-requests`, {
                username: fields.name,
                email: fields.mail,
                phone: fields.phone,
                telegramNickname: fields.telegram,
                comment: 'Web'
            })
            if (response.status === 200) {
                showSnackbar("Ваш запрос успешно отправлен!", snackbarTypes.success)
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

    const isActive = !!fields.name && !!fields.mail && !!fields.phone && !!fields.telegram

    console.log(!!fields.telegram)

    return (
        <div className={s.wrapper}>
            <div className={s.inputFormBlock}>
                <InputForm size="100%" field="name" title="" callback={onChange} placeholder="Имя"/>
                <InputForm size="100%" field="mail" title="" callback={onChange} placeholder="Электронная почта"/>
                <InputForm size="calc(50% - 15px)" field="phone" title="" callback={onChange} placeholder="Телефон"/>
                <InputForm size="calc(50% - 15px)" field="telegram" title="" callback={onChange} placeholder="Telegram"/>
            </div>
            <button onClick={() => isActive ? sendEnrollRequest() : null} className={isActive ? s.loginBtn : s.loginBtnDisabled}>
                Отправить
            </button>
        </div>
    );
};

export default EnrollModalChild;