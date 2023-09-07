import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import {fetchOffersData, postOffer} from "../../../../store/reducers/ActionCreators";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import Button from "../../../../shared/uikit/Button/Button";
import Offer from "./Offer/Offer";
import {offerFieldsInitialState} from "../../../../utils/consts";
import {Dialog, DialogContent} from "@mui/material";
import InputForm from "../../../../shared/uikit/InputForm/InputForm";
import {IOfferFields} from "../../../../models/offers";
import {snackbarTypes} from "../../../../models/common";
import {useSnackbar} from "notistack";

const Offers = () => {
    const {enqueueSnackbar} = useSnackbar()
    const {offers} = useAppSelector((state) => state.offersReducer)
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [fields, setFields] = useState<IOfferFields>(
        offerFieldsInitialState
    )

    const showSnackbar = (msg: string, variant: snackbarTypes) => {
        enqueueSnackbar(msg, {
            variant: variant,
            autoHideDuration: 2500,
        })
    }

    useEffect(() => {
        dispatch(fetchOffersData())
    }, [])

    const formatAmount = (amount: string) =>
        amount
            .replace(/[^0-9.]/g, "")
            .replace(/(\..*)\./g, "$1")
            .replace(/^0+/, "")
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    const onChange = (field: string, val: string) => {
        if (field === "amount") {
            setFields(prev => ({
                ...prev, [field]: formatAmount(val)
            }))
        } else {
            setFields(prev => ({...prev, [field]: val}))
        }
    }

    const checkFields = async () => {
        if (fields.companyName === '') {
            return showSnackbar("Поле компания не должно быть пустым!", snackbarTypes.warning)
        }
        if (fields.offerDate === '') {
            return showSnackbar("Поле дата не должно быть пустым!", snackbarTypes.warning)
        }
        if (fields.amount === '') {
            return showSnackbar("Поле сумма не должно быть пустым!", snackbarTypes.warning)
        }
        const post = await dispatch(postOffer(
            fields.offerDate,
            parseInt(fields.amount.replace(/\s/g, ""), 10),
            fields.companyName,
    ))
        if (post?.status === 200) {
            setIsOpen(false)
            showSnackbar("Успешно", snackbarTypes.success)
        } else {
            showSnackbar(post?.data.message, snackbarTypes.error)
        }
    }

    const getOffers = () => {
        if (!offers.length) {
            return <p>Нет информации за данный период</p>
        }
        return offers.slice(0).reverse().map((offer) => <Offer offerDate={offer.offerDate} amount={offer.amount}
                                            companyName={offer.companyName}/>)
    }

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <p className={s.title}>Офферы</p>
                    <Button onClick={() => setIsOpen(true)} text="Добавить"/>
                </div>
                <div className={s.offersWrapper}>
                    {getOffers()}
                </div>
            </div>
            <Dialog PaperProps={{sx: {width: "100%", maxWidth: "720px!important"}}} open={isOpen}
                    onClose={() => setFields(offerFieldsInitialState)}>
                <DialogContent className={s.modalBody}>
                    <div className={s.inputFormWrapper}>
                        <InputForm placeholder="Google LLC" background="#F1F1F1" field="companyName" title="Компания" callback={onChange}
                                   type="text"/>
                        <InputForm background="#F1F1F1" field="offerDate"
                                   title="Дата"
                                   callback={onChange}
                                   type="date"/>
                        <InputForm value={fields.amount} placeholder="Введите только число" background="#F1F1F1" field="amount"
                                   title="Сумма"
                                   callback={onChange}
                                   type="text"/>
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

export default Offers;