import { useCallback, useRef } from "react"

export const useDebounce = (callback, delay) => {
    const timeout = useRef(null);

    const debounce = useCallback((...args) => {
        if (timeout.current) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => callback(...args), delay)
    }, [callback, delay]);


    return debounce;
}