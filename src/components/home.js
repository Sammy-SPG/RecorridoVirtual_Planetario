import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React from 'react';
import gsap from 'gsap';
import { Link } from "react-router-dom";
import '../styles/home.css';

let scene, camera, renderer, planeMesh, raycaster, frame = 0;

const mouse = {
  x: undefined,
  y: undefined
}

const world = {
  plane: {
    width: 300,
    height: 300,
    heightSegments: 50,
    widthSegments: 50,
  }
}

const generatePlane = () => {
  const { width, height, widthSegments, heightSegments } = world.plane;
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(width, height, widthSegments, heightSegments);

  const { array } = planeMesh.geometry.attributes.position;
  const randomValues = [];
  for (let i = 3; i < array.length; i++) {
    if (i % 3 === 0) {
      const x = array[i];
      const y = array[i + 1];
      const z = array[i + 2];

      array[i] = x + (Math.random() - 0.5) * 3;
      array[i + 1] = y + (Math.random() - 0.5) * 3;
      array[i + 2] = z + (Math.random() - 0.5) * 3;
    }
    randomValues.push(Math.random() * Math.PI * 2);
  }

  planeMesh.geometry.attributes.position.originalPosition = planeMesh.geometry.attributes.position.array;
  planeMesh.geometry.attributes.position.randomValues = randomValues;

  for (let i = 3; i < array.length; i += 3) {
    const z = array[i + 2];
    array[i + 2] = z + Math.random();
  }

  const colors = []
  for (let index = 0; index < planeMesh.geometry.attributes.position.count; index++) {
    colors.push(0, 0.19, 0.4);
  }

  planeMesh.geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(colors), 3));
}

export default class Menu extends React.Component {

  init = () => {
    scene = new THREE.Scene();

    scene.background = new THREE.Color(0x2a3b4c);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(devicePixelRatio);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    const planeGeometry = new THREE.PlaneGeometry(world.plane.width, world.plane.height, world.plane.widthSegments, world.plane.heightSegments);
    const planeMaterial = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
      flatShading: THREE.FlatShading,
      vertexColors: true,
    });
    planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

    generatePlane();

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, -1, 1);

    const backLight = new THREE.DirectionalLight(0xffffff, 1);
    backLight.position.set(0, 0, -1);

    scene.add(light);
    scene.add(backLight);
    scene.add(planeMesh);

    new OrbitControls(camera, renderer.domElement);

    camera.position.z = 40;

    return renderer.domElement;
  }

  animate = () => {

    requestAnimationFrame(this.animate);
    frame += 0.01;
    raycaster = new THREE.Raycaster();

    raycaster.setFromCamera(mouse, camera);

    const { array, originalPosition, randomValues } = planeMesh.geometry.attributes.position;


    for (let i = 0; i < array.length; i += 3) {
      array[i] = originalPosition[i] + Math.cos(frame + randomValues[i / 3]) * 0.01;
      array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomValues[(i / 3) + 1]) * 0.01;
    }

    planeMesh.geometry.attributes.position.needsUpdate = true;

    const intersects = raycaster.intersectObject(planeMesh);

    if (intersects.length > 0) {
      const { color } = intersects[0].object.geometry.attributes;

      color.setX(intersects[0].face.a, 0.1);
      color.setY(intersects[0].face.a, 0.5);
      color.setZ(intersects[0].face.a, 1);

      color.setX(intersects[0].face.b, 0.1);
      color.setY(intersects[0].face.b, 0.5);
      color.setZ(intersects[0].face.b, 1);

      color.setX(intersects[0].face.c, 0.1);
      color.setY(intersects[0].face.c, 0.5);
      color.setZ(intersects[0].face.c, 1);

      color.needsUpdate = true;

      const initialColor = {
        r: 0,
        g: .19,
        b: .4
      }

      const hoveredColor = {
        r: 0,
        g: 0.5,
        b: 1
      }

      gsap.to(hoveredColor, {
        r: initialColor.r,
        g: initialColor.g,
        b: initialColor.b,
        onUpdate: () => {
          color.setX(intersects[0].face.a, hoveredColor.r);
          color.setY(intersects[0].face.a, hoveredColor.g);
          color.setZ(intersects[0].face.a, hoveredColor.b);


          color.setX(intersects[0].face.b, hoveredColor.r);
          color.setY(intersects[0].face.b, hoveredColor.g);
          color.setZ(intersects[0].face.b, hoveredColor.b);


          color.setX(intersects[0].face.c, hoveredColor.r);
          color.setY(intersects[0].face.c, hoveredColor.g);
          color.setZ(intersects[0].face.c, hoveredColor.b);

          color.needsUpdate = true;
        }
      });
    }
    renderer.render(scene, camera);
  }

  handleMouseMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }

  componentDidMount() {
    document.getElementById('container').appendChild(this.init());
    this.animate();
  }

  render() {
    return (
      <div id="container" onMouseMove={(e) => this.handleMouseMove(e)}>
        <div className="containerNomenclature text">
          <h1 className = "title">Planetario Digital Chimalhuacan</h1>
          <p className = "description">Inmersion en un recorrido virtual con realidad aumentada</p>
          <Link className='button' to="/tour">Ver recorrido</Link>
        </div>
      </div>
    );
  }
}