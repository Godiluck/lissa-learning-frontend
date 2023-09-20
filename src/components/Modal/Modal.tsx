import React, {ReactNode, useRef} from 'react';
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
    useClickOutside(true, () => setTimeout(() => onClose(), 100), modalRef)
    return (
        <div style={isModal ? {visibility: "visible", opacity: 1} : {}} className={s.overlay}>
            <div ref={modalRef} className={s.modal}>
                <div className={s.modalLogo}><Logo size={132}/></div>
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