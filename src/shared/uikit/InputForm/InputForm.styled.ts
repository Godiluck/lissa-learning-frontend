import {makeStyles} from "tss-react/mui";

interface IProps {
    background: string
}

export const useInputFormStyles = makeStyles<IProps>()((theme, props) => {
    return {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            rowGap: "12px",
            alignItems: "center",
        },
        title: {
            fontSize: "27px",
            fontWeight: 400,
            color: "#534545",
            margin: 0,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
        },
        inputWrapper: {
            position: "relative",
        },
        input: {
            background: props.background,
            borderRadius: "16px",
            fontSize: "27px",
            letterSpacing: "1.5px",
            height: "50px",
            outline: "none",
            padding: "12px 20px",
            border: "none",
            width: "calc(100% - 40px)",
            textWrap: "nowrap",
            overflow: "hidden",
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