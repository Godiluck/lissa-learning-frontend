import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import {useAppSelector} from "../../../../hooks/redux";

interface IFields {
    username: string,
    email: string,
}

const Profile = () => {
    const {email, username} = useAppSelector((state) => state.userReducer)

    const [fields, setFields] = useState<IFields>({
        username: '',
        email: '',
    })

    useEffect(() => {
        setFields({
            email: email,
            username: username
        })
    }, [])

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    return (
        <div className={s.wrapper}>
            <p className={s.title}>Аккаунт</p>
            <div className={s.fieldsWrapper}>
                <InputForm field="username" value={username} title="Имя" callback={onChange} type="text" isDisabled/>
                <InputForm field="email" value={email} title="Email" callback={onChange} type="text" isDisabled/>
            </div>
        </div>
    );
};

export default Profile;