import React, {ReactNode, useEffect, useRef} from 'react';
import useClickOutside from "../../../../hooks/useClickOutside";
import s from "./style.module.scss";
import Logo from "../../../../svgs/Logo";
import {IReviewItem} from "../../../../models/common";

interface IProps {
    onClose: () => void;
    isModal: boolean;
    review: IReviewItem | null;
}

const ReviewModal: React.FC<IProps> = ({ onClose, isModal, review }) => {
    const modalRef = useRef(null)
    useClickOutside(isModal, () => setTimeout(() => onClose(), 100), modalRef)

    useEffect(() => {
        if (isModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isModal])

    return (
        <div style={isModal ? {opacity: 1, transition: "all .5s ease", pointerEvents: "initial"} : {}} className={s.overlay}>
            <div ref={modalRef} className={s.modal}>
                <div className={s.modalLogo}><Logo size={36}/></div>
                <div className={s.modalInner}>
                    <p className={s.studentInfo}>{review?.name} {review?.age}</p>
                    <p className={s.reviewText}>{review?.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;