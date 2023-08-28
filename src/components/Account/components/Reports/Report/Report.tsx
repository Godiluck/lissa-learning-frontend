import React from 'react';
import {IReport} from "../../../../../models/account";
import s from './style.module.scss'

interface IProps {
    report: IReport
}

const Report: React.FC<IProps> = ({ report }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <p>Дата: {report.reportDate}</p>
                <p>Затраченное время: {report.studyingTime}ч</p>
            </div>
            <div className={s.body}>
                <div className={s.bodyGap}>
                    <p>Что делал:</p>
                    <p>{ report.workDone }</p>
                </div>
                <div className={s.bodyGap}>
                    <p>Проблемы:</p>
                    <p>{ report.problems }</p>
                </div>
            </div>
        </div>
    );
};

export default Report;