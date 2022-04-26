import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Header from './header';
import Navigation from './navigation';

export default function Model() {
    require('../styles/home.css');
    const montRef = useRef(null);
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance", precision: 'lowp', animation: true });
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 100);
    const clock = new THREE.Clock();
    const modelGroup = new THREE.Group();
    const modelAstronautaGrup = new THREE.Group();
    let orbitControls, currentRef;
    
    useEffect(() => {
        createScene();
        initRenderer(currentRef);
        initCamera();
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
    },[]);

    const createScene = () => {
        currentRef = montRef.current;
        const light = new THREE.PointLight(0xF9E79F, 2);
        const ambientLight = new THREE.AmbientLight(0xAED6F1, 1);

        scene.background = new THREE.Color(0x000000);
        light.position.set(-5, 5, -8);
        scene.add(ambientLight);
        scene.add(light)
        scene.add(camera);
        currentRef.appendChild(renderer.domElement);
        initOrbit();
        Modelheart();
        modelText();
        modelAstronauta();
        particles();
        animate();
    }

    const initRenderer = (currentRef) => {
        const { clientWidth: width, clientHeight: height } = currentRef;
        renderer.setSize(width, height);
    }

    const initCamera = () => {
        camera.position.z = 35;
        camera.position.x = 0;
        camera.position.y = 0;
    }

    const initOrbit = () => {
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.maxDistance = 50;
    }

    const Modelheart = () => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/inicio/scene.gltf', (gltf) => {
            modelGroup.add(gltf.scene);
            modelGroup.scale.set(40, 40, 40);
            modelGroup.position.set(0, -6, 4);
            scene.add(modelGroup);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const modelText = () => {
        const loader = new FontLoader();
        loader.load('./Models/inicio/text/openSans_Bold.json', (font) => {
            const geometry = new TextGeometry('Planetario Digital Chimalhuacan', {
                font: font,
                size: 1,
                height: 0.1,
            });

            const textMesh = new THREE.Mesh(geometry, [
                new THREE.MeshPhongMaterial({ color: 0xffffff }), //font
                new THREE.MeshPhongMaterial({ color: 0x7D3C98 }) //side
            ]);

            textMesh.castShadow = true;
            textMesh.position.y = 5;
            textMesh.position.z = -8;
            textMesh.position.x = -11;
            scene.add(textMesh);
        });
    }

    const modelAstronauta = () => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/Astronauta/scene.gltf', (gltf) => {
            gltf.scene.scale.set(1, 1, 1);
            gltf.scene.position.set(5, 0, -6);
            modelAstronautaGrup.add(gltf.scene);
            scene.add(modelAstronautaGrup);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const particles = () => {
        const sprite = new THREE.TextureLoader().load('./Models/Inicio/particle/yellow.png');
        const count = 2000;
        const particlesPositions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            particlesPositions[i] = Math.random() * (-95 - 95 + 1) + 95;
        }
        const particlesAttribute = new THREE.BufferAttribute(particlesPositions, 3);
        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute("position", particlesAttribute);

        const material = new THREE.PointsMaterial({ size: 2, sizeAttenuation: true, alphaTest: 0.5, transparent: true, map: sprite });
        const particles = new THREE.Points(particlesGeometry, material);
        scene.add(particles);
    };
    const animate = () => {
        const elapsedTime = clock.getElapsedTime();
        modelGroup.rotation.y = elapsedTime * 0.1;
        modelGroup.rotation.z = elapsedTime * 0.1;
        modelAstronautaGrup.rotation.z = elapsedTime * 0.8;
        renderer.render(scene, camera);
        orbitControls.update();
        requestAnimationFrame(animate)
    }

    return (
        <div ref={montRef} style={{ width: '100%', height: '100vh' }}>
            <div className="header">
                <Header />
            </div>
            <div className="container">
                <Navigation />
            </div>
        </div>
    );
}