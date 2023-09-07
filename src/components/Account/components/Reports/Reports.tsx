import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import {fetchReportsData} from "../../../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import Report from "./Report/Report";
import Button from "../../../../shared/uikit/Button/Button";
import {Dialog, DialogContent} from "@mui/material";
import {IReportFields} from "../../../../models/account";
import {reportInputFieldsInitialState} from "../../../../utils/consts";
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import TextAreaForm from "../../../../shared/uikit/SpanForm/TextAreaForm";
import {showSnackbar} from "../../../../utils/common";
import {snackbarTypes} from "../../../../models/common";
import {postReport} from "../../../../api/api";
import {useSnackbar} from "notistack";

const Reports = () => {
    const { enqueueSnackbar } = useSnackbar()
    const {reports} = useAppSelector((state) => state.reportsReducer)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [fields, setFields] = useState<IReportFields>(
        reportInputFieldsInitialState
    )

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
        enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    useEffect(() => {
        dispatch(fetchReportsData())
    }, [])

    const getReports = () => {
        if (reports.length === 0) {
            return <p className={s.reportsTitle}>Нет отчетов за данный период</p>
        } else {
            return reports.map((item) => <Report key={item.externalId} report={item}/>)
        }
    }

    const onChange = (field: string, val: string) => {
        setFields(prev => ({...prev, [field]: val}))
    }

    const checkFields = async () => {
        if (fields.reportDate.length !== 10) {
            return showSnackbar("Корректно заполните дату!", snackbarTypes.warning)
        }
        if (fields.studyingTime === '') {
            return showSnackbar("Поле затраченное время не должно быть пустым!", snackbarTypes.warning)
        }
        if (fields.workDone === '') {
            return showSnackbar("Напишите что вы сделали!", snackbarTypes.warning)
        }
        const post = await dispatch(postReport(fields))
        if (post?.status === 200) {
            setIsOpen(false)
            showSnackbar("Успешно", snackbarTypes.success)
        } else {
            showSnackbar(post?.data.message, snackbarTypes.error)
        }
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <p className={s.title}>Отчеты</p>
                    <Button onClick={() => setIsOpen(true)} text="Добавить"/>
                </div>
                <div className={s.reportsWrapper}>
                    {getReports()}
                </div>
            </div>
            <Dialog PaperProps={{sx: {width: "100%", maxWidth: "720px!important"}}} open={isOpen}
                    onClose={() => setFields(reportInputFieldsInitialState)}>
                <DialogContent className={s.modalBody}>
                    <div className={s.inputFormWrapper}>
                        <InputForm background="#F1F1F1" field="reportDate" title="Дата" callback={onChange}
                                   type="date"/>
                        <InputForm placeholder="Введите только цифру/число" background="#F1F1F1" field="studyingTime" title="Затраченное время"
                                   callback={onChange}
                                   type="number"/>
                        <TextAreaForm placeholder="Пример: подготовка к ревью" minHeight="160px" background="#F1F1F1" field="workDone" title="Что делал" callback={onChange}/>
                        <TextAreaForm placeholder="Пример: проблемы с миграцией" minHeight="160px" background="#F1F1F1" field="problems" title="Проблемы" callback={onChange}/>
                    </div>
                    <div className={s.btnsWrapper}>
                        <Button background="#ff6700" onClick={() => setIsOpen(false)} text="Отменить"/>
                        <Button onClick={checkFields} text="Отправить"/>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Reports;