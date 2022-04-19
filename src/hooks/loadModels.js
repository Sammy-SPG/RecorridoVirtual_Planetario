import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Model() {

    const ModelCoheteSaturnoV = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/SaturnV/model_draco/scene.gltf', gltf => {
            gltf.scene.scale.set(0.04, 0.04, 0.04);
            gltf.scene.position.set(0, -2, 0);
            scene.add(gltf.scene)
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelCommandModule = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/commandModule/scene.gltf', gltf => {
            gltf.scene.scale.set(0.5, 0.5, 0.5);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelCuriosityRobert = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/CuriosityRobert/scene.gltf', gltf => {
            gltf.scene.scale.set(8, 8, 8);
            gltf.scene.position.set(2, 0, -6);
            gltf.scene.rotation.set(0, 40 * - (Math.PI / 180), 0);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const modelFalconHeavy = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/FalconHeavy/fh-block-5.gltf', gltf => {
            gltf.scene.position.set(0, -3, 0);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, e => {
            console.log('error: ', e);
        });
    }

    const ModelGeodesicDome = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/GeodesicDome/scene.gltf', gltf => {
            gltf.scene.scale.set(0.01, 0.01, 0.01);
            gltf.scene.rotation.set(0, 55 * (Math.PI / 180), 0);
            gltf.scene.position.y = -1;
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelMarsBase = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/marsBase/scene.gltf', gltf => {
            gltf.scene.scale.set(0.5, 0.5, 0.5);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelMooonLanding = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/moonLoading/scene.gltf', (gltf) => {
            gltf.scene.scale.set(0.5, 0.5, 0.5);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelSpaceShuttle = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/SpaceShuttle/scene.gltf', (gltf) => {
            gltf.scene.position.set(0, -2, -13);
            gltf.scene.rotation.set(90 * - Math.PI / 180, 0 , Math.PI / 1);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    const ModelSpaceStationInternational = (scene) => {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./Models/SpaceStationInternational/scene.gltf', (gltf) => {
            gltf.scene.scale.set(10, 10, 10);
            scene.add(gltf.scene);
        }, () => {
            console.log('El modelo se sigue cargando');
        }, (e) => {
            console.log('error: ', e);
        });
    }

    return {
        ModelCoheteSaturnoV, 
        ModelCommandModule, 
        ModelMooonLanding, 
        modelFalconHeavy, 
        ModelSpaceStationInternational, 
        ModelCuriosityRobert, 
        ModelMarsBase, 
        ModelSpaceShuttle, 
        ModelGeodesicDome
    };
}