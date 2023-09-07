import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import {useAppSelector} from "../../../../hooks/redux";

interface IFields {
    username: string,
    email: string,
    birthday: string | null,
    telegramNickname: string,
}

const Profile = () => {
    const {email, username, birthday, telegramNickname} = useAppSelector((state) => state.userReducer)

    const [fields, setFields] = useState<IFields>({
        username: '',
        email: '',
        birthday: '',
        telegramNickname: '',
    })

    useEffect(() => {
        setFields({
            email: email,
            username: username,
            birthday: birthday,
            telegramNickname: telegramNickname,
        })
    }, [])

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    return (
        <div className={s.wrapper}>
            <p className={s.title}>Аккаунт</p>
            <div className={s.fieldsWrapper}>
                <div className={s.fieldsRow}>
                    <InputForm field="username" value={username} title="Имя" callback={onChange} type="text" isDisabled/>
                    <InputForm field="email" value={email} title="Email" callback={onChange} type="text" isDisabled/>
                </div>
                <div className={s.fieldsRow}>
                    <InputForm field="birthday" value={birthday ? birthday : undefined} title="День рождения" callback={onChange} type="text" isDisabled/>
                    <InputForm field="telegramNickname" value={telegramNickname} title="Telegram" callback={onChange} type="text" isDisabled/>
                </div>
            </div>
        </div>
    );
};

export default Profile;