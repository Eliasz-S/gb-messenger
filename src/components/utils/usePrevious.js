// кастомный хук

import { useEffect, useRef } from "react"

export const usePrevious = (value) => {
    const previous = useRef;

    useEffect(() => {
        previous.current = value;
    }, [value]);

    return previous.current;
}