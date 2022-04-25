import React, {useEffect, useRef} from 'react';

export default function Info({ data }) {
    const refInfo = useRef();

    useEffect(() =>{
        const InfoCurrent = refInfo.current;
        return ()=>{
            for(let i = InfoCurrent.children.length - 1; i >= 0; i--) {
                const obj = InfoCurrent.children[i];
                InfoCurrent.removeChild(obj);
            }
        }
    },[])

    return (
        <div className="info" ref = {refInfo}>
            <h1>{data.title}</h1>
            <hr />
            <p>{data.textContent}</p>
        </div>
    )
}