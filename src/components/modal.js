import React from 'react';
import '../styles/modal.css';
import '../styles/scrollModal.css';

export default function Modal(props){

    const handleClick = (event) => {
        event.stopPropagation();
    }
        return (
            <article className={props.isOpen ? 'modal is-open' : 'modal'} onClick={() => {props.closeModal(); props.stateHfov();}}>
                <button
                    className="modal-close"
                    onClick={() => {props.closeModal(); props.stateHfov(); }}
                >X</button>
                <div className="modal-container" onClick={handleClick}>
                    {props.children}
                </div>
            </article>
        );
}
