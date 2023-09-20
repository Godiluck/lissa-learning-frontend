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
        <div onClick={() => setIsOpen(!isOpen)} style={isOpen ? {maxHeight: 1000, background: "#20202E"} : {}} className={s.wrapper}>
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