import React, {ReactNode, useEffect, useRef} from 'react';
import s from './style.module.scss'
import Logo from "../../svgs/Logo";
import useClickOutside from "../../hooks/useClickOutside";

interface IProps {
    child: ReactNode;
    onClose: () => void;
    isModal: boolean;
}

const Modal: React.FC<IProps> = ({child, onClose, isModal}) => {
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
                <div className={s.modalLogo}><Logo size={132} circuitColor="#35b8be"/></div>
                <div className={s.modalInner}>
                    <p className={s.modalLogoTextUpper}>Lissa</p>
                    <p className={s.modalLogoTextLower}>Learning</p>
                    <div className={s.child}>
                        {child}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;