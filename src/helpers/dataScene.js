import images from '../hooks/images';

const [defaulScene_image, cosmonautica_image, marteInicio_image, tunelMarte, inicioMarte, trajeMarte, robertCuriocity, marteDomo, domoGeodesico, galeria, sistemaSolar, salaEspera] = images;

const Scenes = {
    defaultScene: {
        title: 'Entrada al planetario :)',
        image: defaulScene_image,
        pitch: 2,
        yaw: -7,
        hfov: 110,
        hotspot: {
            SaturnoV: {
                pitch: 1,
                yaw: -7,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            transbordador:{
                pitch: -12,
                yaw: 76,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'transbordador',
            },
            Curiosity:{
                pitch: -12,
                yaw: 51,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Curiosity',
            },
            FalconHeavy:{
                pitch: -12,
                yaw: 34,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'FalconHeavy',
            },
            EstacionEspacial:{
                pitch: -12,
                yaw: 18,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'EstacionEspacial',
            },
            Estructura:{
                pitch: -6,
                yaw: -63,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Estructura',
            },
            alunizaje:{
                pitch: -8,
                yaw: -42,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'alunizaje',
            },
            nextTour: {
                pitch: -18,
                yaw: 7,
                cssClass: 'nextTour',
            },
        },
    },
    cosmonautica: {
        title: 'Cohete saturnoV',
        image: cosmonautica_image,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            SaturnoV: {
                pitch: -3,
                yaw: -12,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            Astronautas:{
                pitch: -13,
                yaw: 43,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Astronautas',
            },
            nextTour: {
                pitch: -19,
                yaw: 130,
                cssClass: 'nextTour',
            },
        },
    },
    Mars:{
        title: 'Pasillo a la sala de Mars',
        image: marteInicio_image,
        pitch: -3,
        yaw: -52,
        hfov: 110,
        hotspot: {
            Mars: {
                pitch: -5,
                yaw: -52,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Mars',
            },
            nextTour: {
                pitch: -16,
                yaw: -16,
                cssClass: 'nextTour',
            }
        },
    },
    Tunel:{
        title: 'Pasillo a la sala de Mars',
        image: tunelMarte,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -28,
                yaw: -3,
                cssClass: 'nextTour',
            }
        },
    },
    marteInicio:{
        title: 'Traje espacial para marte',
        image: inicioMarte,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            sala: {
                pitch: 3,
                yaw: -2,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'sala',
            },
            nextTour: {
                pitch: -25,
                yaw: 28,
                cssClass: 'nextTour',
            }
        },
    },
    trajeMars:{
        title: 'Traje espacial para marte',
        image: trajeMarte,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            traje: {
                pitch: 4,
                yaw: -5,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'traje',
            },
            nextTour: {
                pitch: -27,
                yaw: 68,
                cssClass: 'nextTour',
            }
        },
    },
    robertCuriocity:{
        title: 'Robert Curicity',
        image: robertCuriocity,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            robert: {
                pitch: -18,
                yaw: -3,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'robert',
            },
            colonia:{
                pitch: -16,
                yaw: 175,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'colonia',
            },
            nextTour: {
                pitch: -26,
                yaw: -65,
                cssClass: 'nextTour',
            }
        },
    },
    marteDomo:{
        title: 'Marte domo',
        image: marteDomo,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -26,
                yaw: 110,
                cssClass: 'nextTour',
            }
        }
    },
    domoGeodesico:{
        title: 'Domo geodecico',
        image: domoGeodesico,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -20,
                yaw: 125,
                cssClass: 'nextTour',
            }
        }
    },
    galeria:{
        title: 'Galeria',
        image: galeria,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -20,
                yaw: 1.5,
                cssClass: 'nextTour',
            }
        }
    },
    sistemaSolar:{
        title: 'Sistema solar',
        image: sistemaSolar,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -15,
                yaw: 127,
                cssClass: 'nextTour',
            }
        }
    },
    salaEspera:{
        title: 'Sala de espera',
        image: salaEspera,
        pitch: 4,
        yaw: -5,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -15,
                yaw: 127,
                cssClass: 'nextTour',
            }
        }
    }
};

export default Scenes;