import React, {useEffect} from 'react';
import s from './style.module.scss'
import {fetchReportsData} from "../../../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";

const Reports = () => {
    const { reports } = useAppSelector((state) => state.reportsReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchReportsData())
    }, [])
    return (
        <div className={s.wrapper}>
            <p className={s.title}>Отчеты</p>
            <div className={s.reportsWrapper}>
                {reports.length === 0 && (
                    <p className={s.reportsTitle}>Нет отчетов за данный период</p>
                )}
            </div>
        </div>
    );
};

export default Reports;