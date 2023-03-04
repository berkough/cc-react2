import { useEffect, useRef } from 'react';

export default function useRunOnce({fn, sessionKey}){
    const triggered = useRef(false);

    useEffect(()=>{
        const hasBeenTriggered = sessionKey ? sessionStorage.getItem(sessionKey) : triggered.current;

        if(!hasBeenTriggered){
            fn();
            triggered.current = true;

            if(sessionKey){
                sessionStorage.setItem(sessionKey,"true");
            }
        }
    }, [fn, sessionKey]);
    return null;
}