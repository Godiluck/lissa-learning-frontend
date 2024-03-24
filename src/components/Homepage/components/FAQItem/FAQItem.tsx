import React, {useState} from 'react';
import s from './style.module.scss'
import PlusIcon from "../../../../svgs/PlusIcon";
import MinusIcon from "../../../../svgs/MinusIcon";

interface IProps {
    title: string;
    bodyText: string;
}

const FaqItem: React.FC<IProps> = ({title, bodyText}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div onClick={() => setIsOpen(!isOpen)} style={isOpen ? {maxHeight: "500px", background: "#f5fbfc", transition: "all .3s ease-in", boxShadow: "0 10px 30px 0 rgba(0, 0, 0, 0.15)"} : {}} className={s.wrapper}>
            <div className={s.header}>
                <p className={s.headerText}>{title}</p>
                <div style={isOpen ? {} : {opacity: 1, transform: "rotate(180deg)"}} className={s.headerIndicator}><PlusIcon/></div>
                <div style={isOpen ? {opacity: 1, transform: "rotate(-180deg)"} : {}} className={s.headerIndicator}><MinusIcon/>
                </div>
            </div>
            <p className={s.body}>{bodyText}</p>
        </div>
    );
};

export default FaqItem;