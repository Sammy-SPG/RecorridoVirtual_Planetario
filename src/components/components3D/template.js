import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Load from '../carga';
import ModelComponent from '../../hooks/loadModels';

export default function Model({ model }) {
    const mountRef = useRef(null);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: "high-performance", precision: 'lowp', animation: true });
    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 30);
    const modelGroup = new THREE.Group();
    const clock = new THREE.Clock();
    let currentRef, orbitControls, timer = null;

    useEffect(() => {
        createScene();
        initRenderer(currentRef);
        initCamera();
        Carga();
        orbitControls.addEventListener('start', handleChange);
        orbitControls.addEventListener('end', handleEnd);
        return () => {
            currentRef.removeChild(renderer.domElement);
            orbitControls.dispose();
            for (let i = modelGroup.children.length - 1; i >= 0; i--) {
                let obj = modelGroup.children[i];
                modelGroup.remove(obj);
            }
            for (let i = scene.children.length - 1; i >= 0; i--) {
                let obj = scene.children[i];
                scene.remove(obj);
            }
        };
    }, []);

    const handleChange = () => {
        renderer.setPixelRatio(window.devicePixelRatio * 0.4);
    }
    const handleEnd = () => {
        renderer.setPixelRatio(window.devicePixelRatio * 1);
    }
    const createScene = () => {
        currentRef = mountRef.current;
        const ambientLight = new THREE.AmbientLight(0xeeeeee, 0.8);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);

        scene.add(camera);
        scene.add(ambientLight);
        scene.add(pointLight);
        pointLight.position.set(6, 6, 6);
        importModel();
        initOrbit();
        animate();
    }
    const importModel = () => {
        if (model === 'SaturnoV') {
            const { ModelCoheteSaturnoV } = ModelComponent();
            ModelCoheteSaturnoV(modelGroup);
        } else if (model === 'Astronautas') {
            const { ModelMooonLanding } = ModelComponent();
            ModelMooonLanding(modelGroup);
        } else if (model === 'transbordador') {
            const { ModelSpaceShuttle } = ModelComponent();
            ModelSpaceShuttle(modelGroup);
        } else if (model === 'Curiosity') {
            const { ModelCuriosityRobert } = ModelComponent();
            ModelCuriosityRobert(modelGroup);
        } else if (model === 'EstacionEspacial') {
            const { ModelSpaceStationInternational } = ModelComponent();
            ModelSpaceStationInternational(modelGroup);
        } else if (model === 'colonia') {
            const { ModelMarsBase } = ModelComponent();
            ModelMarsBase(modelGroup);
        } else if (model === "FalconHeavy") {
            const { modelFalconHeavy } = ModelComponent();
            modelFalconHeavy(modelGroup);
        } else if (model === "Estructura") {
            const { ModelCommandModule } = ModelComponent();
            ModelCommandModule(modelGroup);
        } else if (model === "domoGeodesico") {
            const { ModelGeodesicDome } = ModelComponent();
            ModelGeodesicDome(modelGroup);
        } else if (model === "traje") {
            const { ModelMarsSuite } = ModelComponent();
            ModelMarsSuite(modelGroup);
        } else if (model === 'sol') {
            const { ModelSol } = ModelComponent();
            ModelSol(modelGroup);
        } else if (model === 'mercurio') {
            const { ModelMercurio } = ModelComponent();
            ModelMercurio(modelGroup);
        } else if (model === 'venus') {
            const { ModelVenus } = ModelComponent();
            ModelVenus(modelGroup);
        } else if (model === 'tierra') {
            const { ModelTierra } = ModelComponent();
            ModelTierra(modelGroup);
        } else if (model === 'marte') {
            const { ModelMarte } = ModelComponent();
            ModelMarte(modelGroup);
        } else if (model === 'jupiter') {
            const { ModelJupiter } = ModelComponent();
            ModelJupiter(modelGroup);
        } else if (model === 'saturno') {
            const { ModelSaturno } = ModelComponent();
            ModelSaturno(modelGroup);
        } else if (model === 'urano') {
            const { ModelUrano } = ModelComponent();
            ModelUrano(modelGroup);
        } else if (model === 'neptuno') {
            const { ModelNeptuno } = ModelComponent();
            ModelNeptuno(modelGroup);
        }
        scene.add(modelGroup);
    }
    const initOrbit = () => {
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.maxDistance = 20;
    }
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        if (model === 'transbordador') modelGroup.rotation.z = Math.sin(elapsedTime - (elapsedTime * 0.5));
        else if (
            model === 'SaturnoV' ||
            model === 'Curiosity' ||
            model === 'FalconHeavy' ||
            model === 'EstacionEspacial' ||
            model === 'Estructura' ||
            model === 'Astronautas' ||
            model === 'marte' ||
            model === 'traje' ||
            model === 'colonia' ||
            model === 'domoGeodesico' ||
            model === 'sol' ||
            model === 'mercurio' ||
            model === 'venus' ||
            model === 'tierra' ||
            model === 'jupiter' ||
            model === 'urano' ||
            model === 'neptuno'
        ) orbitControls.autoRotate = true;
        orbitControls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    const initRenderer = (currentRef) => {
        const { clientWidth: width, clientHeight: height } = currentRef;
        renderer.setSize(width, height);
    }

    const initCamera = () => {
        camera.position.set(0, 5, 15);
    }
    const Carga = () => {
        timer = setInterval(() => {
            currentRef.removeChild(currentRef.firstChild);
            currentRef.appendChild(renderer.domElement);
            clearInterval(timer);
        }, 1000);
    }
    return (
        <div
            className='Contenedor3D'
            ref={mountRef}
            style={{ width: "100%", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <Load />
        </div>
    );
}