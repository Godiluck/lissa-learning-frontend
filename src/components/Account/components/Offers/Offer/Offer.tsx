import React from 'react';
import s from './style.module.scss'
import {IOffer} from "../../../../../models/offers";

const Offer: React.FC<IOffer> = ({ offerDate, amount, companyName }) => {
    return (
        <div className={s.wrapper}>
            <p className={s.offerCompany}>{companyName}</p>
            <div className={s.body}>
                <p className={s.offerDate}>Дата: {offerDate}</p>
                <p className={s.offerAmount}>Сумма: {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
            </div>
        </div>
    );
};

export default Offer;