import {makeStyles} from "tss-react/mui";

interface IProps {
    background: string;
    size: string;
}

export const useInputFormStyles = makeStyles<IProps>()((theme, props) => {
    return {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            rowGap: "12px",
            alignItems: "center",
            width: props.size,
        },
        title: {
            fontSize: "23px",
            fontWeight: 400,
            color: "#534545",
            margin: 0,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
        },
        inputWrapper: {
            width: "100%",
            position: "relative",
        },
        input: {
            background: props.background,
            borderRadius: "16px",
            fontSize: "23px",
            letterSpacing: "1.5px",
            height: "50px",
            outline: "none",
            padding: "12px 20px",
            border: "none",
            width: "100%",
            textWrap: "nowrap",
            overflow: "hidden",
            color: "#141419",
            textOverflow: "ellipsis",
        },
        eyeWrapper: {
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 15,
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
            width: "auto",
        }
    }
})