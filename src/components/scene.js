import React, { useState, useEffect, useRef } from 'react';
import { Pannellum } from 'pannellum-react';
import Modal from '../components/modal';
import CoheteSaturnoV from './components3D/template';
import { UseModal } from '../hooks/useModal';
import dataInfo from '../helpers/dataInfo';
import dataScene from '../helpers/dataScene';
import Info from './modalInfo';
import '../styles/model.css';
import '../styles/scene.css';
import '../styles/hotspotsScene.css';

export default function Scene () {
    const infoRef = useRef();
    const containerRef = useRef();
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene['defaultScene']);
    const [sceneName, setSceneName] = useState('defaultScene');
    const [model, setModel] = useState(null);
    const [elementInfo, setElementInfo] = useState(null);
    const [pitch, setPitch] = useState(null);
    const [yaw, setYaw] = useState(null);
    const [hfov, setHfov] = useState(null);
    const [view, setView] = useState(true);

    useEffect(() => {
        const main = containerRef.current;
        if (window.matchMedia("(orientation: portrait)").matches) {
            alert("Para tener un mejor experiencia visual, rote el telefono a Horizontal");
            setView(false);
        }
        window.addEventListener('orientationchange', (e) => handleOrientationChange(e));
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
            for(let i = main.children.length - 1; i >= 0; i--){
                main.removeChild(main.children[i]);
            }
        }
    }, []);
    const handleOrientationChange = (e) => {
        var orientation = (window.screen.orientation || {}).type || window.screen.mozOrientation || window.screen.msOrientation;
        if (orientation === "portrait-secondary" || orientation === "portrait-primary") setView(false);
        else if (orientation === undefined) console.log("The orientation API isn't supported in this browser :(");
        else setView(true);
    }
    const hotSpotsScene = (element, i) => {
        if (element.cssClass === 'nextTour' || element.cssClass === 'backTour') {
            return (
                <Pannellum.Hotspot
                    key={i}
                    type="custom"
                    pitch={element.pitch}
                    yaw={element.yaw}
                    handleClick={() => { setScene(dataScene[element.tour]); setSceneName(element.tour); setYaw(null); setPitch(null);}}
                    cssClass='nextTour'
                />
            );
        }
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
        else return;
    }
    const viewElementInfo = (element) => {
        openModal();
        setElementInfo(dataInfo[sceneName][element.hotSpotObj]);
        setModel(element.hotSpotObj);
        setPitch(element.pitch);
        setYaw(element.yaw);
        setHfov(element.hfov);
    }

    const sateteHfov = () => {
        setHfov(scene.hfov);
    }

    return (
        <div ref = {containerRef}>
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
                {Object.values(scene.hotspot).map((element, i) => (hotSpotsScene(element, i)))}
            </Pannellum>

            <Modal isOpen={isOpen} closeModal={() => closeModal()} stateHfov={() => sateteHfov()}>
                <div className="containerModel">{isOpen ? <CoheteSaturnoV model={model} /> : null}</div>
                <div className="containerInfo" ref={infoRef} >{!isOpen ? null : <Info data = {elementInfo}/>}</div>
            </Modal>
        </div>
    );
}