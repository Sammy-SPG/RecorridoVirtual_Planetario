import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'

export default function alertComponent() {
    return (
        <Alert variant="danger">
            <p>
                Rote el telefono para poder ver el reocrido
            </p>
        </Alert>
    )
}