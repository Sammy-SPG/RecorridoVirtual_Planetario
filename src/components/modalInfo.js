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
    },[]);

    return (
        <div className="info" ref = {refInfo}>
            <h1>{data.title}</h1>
            <hr />
            <p>{data.textContent}</p>
            <p><a href = {data.link} target='_blank' rel='noopener noreferrer'>Mas informacion</a></p>
            <div className='contact'>
                <h3>Modelo: {data.autor.title}</h3>
                <div>
                    <p className='autor'>Autor: <a href={data.autor.contact} target='_blank' rel='noopener noreferrer' >{data.autor.autor}</a></p>
                </div>
            </div>
        </div>
    )
}