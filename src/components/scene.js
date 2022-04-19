import React, { useState, useEffect, useRef } from 'react';
import { Pannellum } from 'pannellum-react';
import Modal from '../components/modal';
import CoheteSaturnoV from './components3D/template';
import { UseModal } from '../hooks/useModal';
import dataInfo from '../helpers/dataInfo';
import dataScene from '../helpers/dataScene';
// import GsapAnimation from '../hooks/animations';
import '../styles/scene.css';
import '../styles/hotspotsScene.css';
import '../styles/model.css';

let contador = 0;
let hfovDefault = 110;

const Scene = () => {
    const infoRef = useRef();
    let positionScene = ['defaultScene', 'cosmonautica', 'Mars', 'Tunel', 'marteInicio', 'trajeMars', 'robertCuriocity', 'marteDomo', 'domoGeodesico', 'galeria', 'sistemaSolar', 'salaEspera'];
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene[positionScene[contador]]);
    const [model, setModel] = useState(null);
    const [elementInfo, setElementInfo] = useState(null);
    const [pitch, setPitch] = useState(null);
    const [yaw, setYaw] = useState(null);
    const [hfov, setHfov] = useState(null);
    const [view, setView] = useState(true);

    useEffect(() => {
        //Alerta al usuario que la aplicacion funciona en Horizontal
        if (window.matchMedia("(orientation: portrait)").matches) {
            alert("Para tener un mejor experiencia visual, rote el telefono a Horizontal");
            setView(false);
        }
        window.addEventListener('orientationchange', (e) => handleOrientationChange(e));
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
        }
    }, []);

    //Valida si el dispositivo esta en Horizontal
    const handleOrientationChange = (e) => {
        var orientation = (window.screen.orientation || {}).type || window.screen.mozOrientation || window.screen.msOrientation;
        if (orientation === "portrait-secondary" || orientation === "portrait-primary") setView(false);
        else if (orientation === undefined) console.log("The orientation API isn't supported in this browser :(");
        else setView(true);
    }


    //Ir a la siguiente escena
    const nextScene = () => {
        contador++;
        setScene(dataScene[positionScene[contador]]);
    }

    //Imprime todos lo puntos de la informacion de la escena
    const hotSpotsScene = (element, i) => {
        //Si el boton es para ir a la siguiente escena, le asigna el evento correspondiente
        if (element.cssClass === 'nextTour')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={() => { nextScene() }}
                    cssClass={element.cssClass}
                />
            );
        //si el boton es de informacion, le asigna el evento para ver la informacion
        else if (element.cssClass === 'hotspot_info')
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={() => { viewElementInfo(element) }}
                    cssClass={element.cssClass}
                />
            );
    }

    /*Funcion de ver la informacion del elemento que recibe el elemento dado al crear el punto
    entonces en la posicion de la escena, selecciona el tipo de informacion con hotSpotObj
    Ademas establece el tipo de modelo a mostrar 
    */
    const viewElementInfo = (element) => {
        openModal();
        setElementInfo(dataInfo[positionScene[contador]][element.hotSpotObj]);
        setModel(element.hotSpotObj);
        setPitch(element.pitch);
        setYaw(element.yaw);
        setHfov(element.hfov);
    }

    const getElementInfo = () => {
        if (elementInfo === null) {
            return;
        } else {
            return (
                <div className="info">
                    <h1>{elementInfo.title}</h1>
                    <hr />
                    <p>{elementInfo.textContent}</p>
                </div>
            );
        }
    }

    const sateteHfov = () => {
        setHfov(hfovDefault);
    }

    return (
        <>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={view ? scene.image : ''}
                pitch={pitch === null ? scene.pitch : pitch}
                yaw={pitch === null ? scene.yaw : yaw}
                hfov={hfov === null ? scene.hfov : hfov}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
                hotspotDebug={true}
            >
                {/* pintar todos los puntos de las escena */}
                {Object.values(scene.hotspot).map((element, i) => (hotSpotsScene(element, i)))}

            </Pannellum>

            <Modal isOpen={isOpen} closeModal={() => closeModal()} stateHfov={() => sateteHfov()} >
                <div className="containerModel">{isOpen ? <CoheteSaturnoV model={model} /> : null}</div>
                <div className="containerInfo" ref={infoRef} >{getElementInfo()}</div>
            </Modal>
        </>
    );
}

export default Scene;