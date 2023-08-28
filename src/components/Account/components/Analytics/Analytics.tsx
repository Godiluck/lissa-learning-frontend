import React from 'react';
import s from './style.module.scss'

const Analytics = () => {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>Аналитика</p>
            <div className={s.fieldsWrapper}>
                <p>Нет информации</p>
            </div>
        </div>
    );
};

export default Analytics;