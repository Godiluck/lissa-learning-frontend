import {makeStyles} from "tss-react/mui";

interface IProps {
    textColor?: string | null,
    background?: string | null,
    width?: number | null,
}

export const useButtonStyles = makeStyles<IProps>()((theme, props) => {
    return {
        wrapper: {
            width: props.width ? `${props.width}px` : "250px",
            height: "50px",
            cursor: "pointer",
            border: "none",
            borderRadius: "16px",
            background: props.background ? props.background : "#37BD80"
        },
        wrapperInactive: {
            cursor: "default",
            width: props.width ? `${props.width}px` : "250px",
            height: "50px",
            border: "none",
            borderRadius: "16px",
            background: props.background ? props.background : "#37BD80",
            opacity: .3
        },
        text: {
            color: props.textColor ? props.textColor : "#FFFFFF",
            fontSize: "23px",
            fontWeight: 700,
            textTransform: "uppercase",
            margin: 0,
        },
    }
})