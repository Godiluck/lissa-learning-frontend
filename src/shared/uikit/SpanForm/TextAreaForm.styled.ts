import {makeStyles} from "tss-react/mui";

interface IProps {
    background: string,
    minHeight: string,
}

export const useTextAreaFormStyles = makeStyles<IProps>()((theme, props) => {
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
        textArea: {
            background: props.background,
            borderRadius: "16px",
            fontSize: "27px",
            letterSpacing: "1.5px",
            minHeight: props.minHeight,
            height: "auto",
            outline: "none",
            padding: "12px 20px",
            border: "none",
            width: "calc(100% - 40px)",
        }
    }
})