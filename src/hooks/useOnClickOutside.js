import React, { useEffect }  from 'react'

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listner = (event) => {
            console.log('ref', ref.current);
            if(!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler()
        };

        document.addEventListener("mousedown", listner);
        document.addEventListener("touchstart", listner);
        return () => {
            document.addEventListener("mousedown", listner);
            document.addEventListener("touchstart", listner);
        };
    }, []);
};

export default useOnClickOutside;
