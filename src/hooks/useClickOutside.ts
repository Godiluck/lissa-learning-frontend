import {RefObject, useEffect} from "react";

const useClickOutside = (
    open: boolean,
    callback: () => void,
    ref: RefObject<HTMLDivElement>,
    ignoreElemClasses?: string[],
    ignoreParentClass?: string
) => {
    useEffect(() => {
        function handleClickOutside(e) {
            const targetClasses = Array.from(e.target?.classList) as string[];
            const classMatch = targetClasses.some((className) =>
                ignoreElemClasses?.includes(className)
            );
            if (
                (!ref?.current || !ref?.current.contains(e.target)) &&
                !classMatch &&
                !document.querySelector(ignoreParentClass!)?.contains(e.target)
            ) {
                callback();
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, ref, callback]);
}

export default useClickOutside;