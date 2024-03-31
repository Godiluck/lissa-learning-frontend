import React, {ReactNode, useEffect, useRef} from 'react';
import s from './style.module.scss'
import LogoIcon from "../Logo/LogoIcon";
import useClickOutside from "../../hooks/useClickOutside";
import useMediaQuery from "../../hooks/useMediaQuery";
import {SCREENS} from "../../utils/consts";
import {LogoText} from "../Logo/LogoText";
import CloseIcon from "../../svgs/CloseIcon";

interface IProps {
    child: ReactNode;
    onClose: () => void;
    isModal: boolean;
}

const Modal: React.FC<IProps> = ({child, onClose, isModal}) => {
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
                <div className={s.modalLogoIcon}>
                    <LogoIcon size={isMobileMiddle ? 60 : 110} circuitColor="#35b8be"/>
                </div>
                <div className={s.modalInner}>
                    <LogoText mainTextColor="#35b8be" secondTextColor="#373737" />
                    <div className={s.child}>
                        {child}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;