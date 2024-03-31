import React, {useEffect, useRef} from 'react';
import useClickOutside from "../../../../hooks/useClickOutside";
import s from "./style.module.scss";
import LogoIcon from "../../../Logo/LogoIcon";
import {IReviewItem} from "../../../../models/common";
import CloseIcon from "../../../../svgs/CloseIcon";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import {SCREENS} from "../../../../utils/consts";

interface IProps {
    onClose: () => void;
    isModal: boolean;
    review: IReviewItem | null;
}

const ReviewModal: React.FC<IProps> = ({ onClose, isModal, review }) => {
    const modalRef = useRef(null)
    const isMobileMiddle = useMediaQuery(SCREENS.mobileMiddle)
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
                {isMobileMiddle && <div className={s.modalCloseIcon} onClick={onClose}><CloseIcon/></div>}
                <div className={s.modalLogo}><LogoIcon size={36} circuitColor="#35b8be" /></div>
                <div className={s.modalInner}>
                    <div className={s.studentInfoWrapper}>
                        <p className={s.studentInfo}>{review?.name} {review?.age}</p>
                        <p className={s.company}>{review?.company}</p>
                    </div>
                    <p className={s.reviewText}>{review?.review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;