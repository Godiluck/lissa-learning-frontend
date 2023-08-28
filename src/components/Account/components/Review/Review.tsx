import React, {useState} from 'react';
import s from './style.module.scss'
import Button from "../../../../shared/uikit/Button/Button";
import {reportInputFieldsInitialState} from "../../../../utils/consts";
import {Dialog, DialogContent} from "@mui/material";
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import TextAreaForm from "../../../../shared/uikit/SpanForm/TextAreaForm";

const Review = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <p className={s.title}>Ревью</p>
                    <Button onClick={() => setIsOpen(true)} text="Записаться"/>
                </div>
                <div className={s.reviewListWrapper}>
                    <p>Нет записей за данный период</p>
                </div>
            </div>
            <Dialog PaperProps={{sx: {width: "100%", maxWidth: "720px!important"}}} open={isOpen}>
                <DialogContent className={s.modalBody}>
                    <div className={s.inputFormWrapper}>
                        TODO
                    </div>
                    <div className={s.btnsWrapper}>
                        <Button background="#ff6700" onClick={() => setIsOpen(false)} text="Отменить"/>
                        <Button onClick={() => console.log("click")} text="Отправить"/>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Review;