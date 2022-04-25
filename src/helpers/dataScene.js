import images from '../hooks/images';
const [
    defaulScene,
    cosmonautica,
    cosmonautica_p2,
    Cosmonautica_marte,
    tunelMarte,
    inicioMarte,
    trajeMarte,
    baseMarte,
    robertCuriocity,
    domoGeodesico,
    galeria,
    sistemaSolar,
    Sistem_Mural,
    mural,
    inicioDomo,
    Domo,
    telescopios,
    observadores
] = images;

const Scenes = {
    defaultScene: {
        title: 'Entrada al planetario :)',
        image: defaulScene,
        pitch: -7,
        yaw: 57,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -10,
                yaw: 68,
                cssClass: 'nextTour',
                tour: 'cosmonautica'
            }
        }
    },
    cosmonautica: {
        title: 'Sala 1- Cosmonautica',
        image: cosmonautica,
        pitch: 2,
        yaw: -7,
        hfov: 85,
        hotspot: {
            SaturnoV: {
                pitch: 1,
                yaw: -7,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            transbordador: {
                pitch: -12,
                yaw: 76,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'transbordador',
            },
            Curiosity: {
                pitch: -12,
                yaw: 51,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Curiosity',
            },
            FalconHeavy: {
                pitch: -12,
                yaw: 34,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'FalconHeavy',
            },
            EstacionEspacial: {
                pitch: -12,
                yaw: 18,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'EstacionEspacial',
            },
            Estructura: {
                pitch: -6,
                yaw: -63,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Estructura',
            },
            alunizaje: {
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
                tour: 'cosmonautica2'
            },
            backTour: {
                pitch: -20,
                yaw: 134,
                cssClass: 'backTour',
                tour: 'defaultScene'
            }
        },
    },
    cosmonautica2: {
        title: 'Sala 1- Cosmonautica',
        image: cosmonautica_p2,
        pitch: -10,
        yaw: 127,
        hfov: 85,
        hotspot: {
            SaturnoV: {
                pitch: -3,
                yaw: -12,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'SaturnoV',
            },
            Astronautas: {
                pitch: -13,
                yaw: 43,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'Astronautas',
            },
            EstacionEspacial: {
                pitch: -14,
                yaw: -75,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'EstacionEspacial',
            },
            nextTour: {
                pitch: -19,
                yaw: 130,
                cssClass: 'nextTour',
                tour: 'Cosmo_Mars'
            },
            backTour: {
                pitch: -19,
                yaw: -28,
                cssClass: 'nextTour',
                tour: 'cosmonautica'
            }
        },
    },
    Cosmo_Mars: {
        title: 'Pasillo a la sala de Mars',
        image: Cosmonautica_marte,
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
                tour: 'Tunel'
            },
            backTour: {
                pitch: -15,
                yaw: -163,
                cssClass: 'backTour',
                tour: 'cosmonautica2'
            }
        },
    },
    Tunel: {
        title: 'Pasillo a la sala de Mars',
        image: tunelMarte,
        pitch: -9,
        yaw: -4,
        hfov: 85,
        hotspot: {
            nextTour: {
                pitch: -28,
                yaw: -3,
                cssClass: 'nextTour',
                tour: 'marteInicio'
            },
            backTour: {
                pitch: -20,
                yaw: -171,
                cssClass: 'backTour',
                tour: 'Cosmo_Mars'
            }
        },
    },
    marteInicio: {
        title: 'Inicio de marte',
        image: inicioMarte,
        pitch: 5,
        yaw: -2,
        hfov: 85,
        hotspot: {
            traje: {
                pitch: 3,
                yaw: -2,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'traje',
            },
            nextTour: {
                pitch: -25,
                yaw: 28,
                cssClass: 'nextTour',
                tour: 'trajeMars'
            },
            backTour: {
                pitch: -27,
                yaw: -74,
                cssClass: 'backTour',
                tour: 'Tunel'
            }
        },
    },
    trajeMars: {
        title: 'Traje espacial para marte',
        image: trajeMarte,
        pitch: -2,
        yaw: -3,
        hfov: 110,
        hotspot: {
            traje: {
                pitch: 4,
                yaw: -5,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'traje',
            },
            colonia: {
                pitch: -13,
                yaw: 46,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'colonia',
            },
            robert: {
                pitch: -10,
                yaw: 103,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'robert',
            },
            nextTour: {
                pitch: -27,
                yaw: 68,
                cssClass: 'nextTour',
                tour: 'baseMarte'
            },
            backTour: {
                pitch: -34,
                yaw: -172,
                cssClass: 'backTour',
                tour: 'marteInicio'
            }
        },
    },
    baseMarte: {
        title: 'Base en marte',
        image: baseMarte,
        pitch: -18,
        yaw: 175,
        hfov: 110,
        hotspot: {
            robert: {
                pitch: -18,
                yaw: -3,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'robert',
            },
            colonia: {
                pitch: -16,
                yaw: 175,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'colonia',
            },
            domoGeodesico: {
                pitch: 0,
                yaw: -114,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'domoGeodesico',
            },
            nextTour: {
                pitch: -26,
                yaw: -65,
                cssClass: 'nextTour',
                tour: 'robertCuriocity'
            },
            backTour: {
                pitch: -26,
                yaw: 86,
                cssClass: 'backTour',
                tour: 'trajeMars'
            }
        },
    },
    robertCuriocity: {
        title: 'Robert Curiosity',
        image: robertCuriocity,
        pitch: 17,
        yaw: 114,
        hfov: 110,
        hotspot: {
            robert: {
                pitch: -16,
                yaw: -19,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'robert',
            },
            domoGeodesico: {
                pitch: 17,
                yaw: 114,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'domoGeodesico',
            },
            nextTour: {
                pitch: -26,
                yaw: 110,
                cssClass: 'nextTour',
                tour: 'domoGeodesico'
            },
            backTour: {
                pitch: -21,
                yaw: 27,
                cssClass: 'backTour',
                tour: 'baseMarte'
            }
        }
    },
    domoGeodesico: {
        title: 'Domo geodecico',
        image: domoGeodesico,
        pitch: -14,
        yaw: 126,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -20,
                yaw: 125,
                cssClass: 'nextTour',
                tour: 'galeria'
            },
            backTour: {
                pitch: -21,
                yaw: -59,
                cssClass: 'backTour',
                tour: 'robertCuriocity'
            }
        }
    },
    galeria: {
        title: 'Galeria',
        image: galeria,
        pitch: -15,
        yaw: 90,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -20,
                yaw: 1.5,
                cssClass: 'nextTour',
                tour: 'sistemaSolar'
            },
            backTour: {
                pitch: -18,
                yaw: -174,
                cssClass: 'backTour',
                tour: 'domoGeodesico'
            }
        }
    },
    sistemaSolar: {
        title: 'Sistema solar',
        image: sistemaSolar,
        pitch: 15,
        yaw: 161,
        hfov: 110,
        hotspot: {
            sol: {
                pitch: -8,
                yaw: -61,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'sol'
            },
            mercurio:{
                pitch: -8,
                yaw: -100,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'mercurio'
            },
            venus:{
                pitch: -7,
                yaw: -152,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'venus'
            },
            tierra:{
                pitch: -9,
                yaw: 167,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'tierra'
            },
            marte:{
                pitch: -10,
                yaw: 155,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'marte'
            },
            jupiter: {
                pitch: 15,
                yaw: 161,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'jupiter'
            },
            saturno:{
                pitch: 22,
                yaw: 123,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'saturno'
            },
            urano:{
                pitch: -4,
                yaw: 91,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'urano'
            },
            neptuno:{
                pitch: -11,
                yaw: 88,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'neptuno'
            },
            pluton:{
                pitch: -9,
                yaw: 53,
                hfov: 50,
                cssClass: 'hotspot_info',
                hotSpotObj: 'pluton'
            },
            nextTour: {
                pitch: -15,
                yaw: 127,
                cssClass: 'nextTour',
                tour: 'Sistem_Mural'
            },
            backTour: {
                pitch: -18,
                yaw: 2,
                cssClass: 'backTour',
                tour: 'galeria'
            }
        }
    },
    Sistem_Mural: {
        title: 'pasillo',
        image: Sistem_Mural,
        pitch: -16,
        yaw: 4,
        hfov: 110,
        hotspot: {
            nextTour_Mural: {
                pitch: -10,
                yaw: 0,
                cssClass: 'nextTour',
                tour: 'Mural'
            },
            nextTour_Telescope: {
                pitch: -23,
                yaw: 70,
                cssClass: 'nextTour',
                tour: 'Telescope'
            },
            nextTour_Domo: {
                pitch: -17,
                yaw: -42,
                cssClass: 'nextTour',
                tour: 'DomoInicio'
            },
            backTour: {
                pitch: -20,
                yaw: -90,
                cssClass: 'backTour',
                tour: 'sistemaSolar',
            }
        }
    },
    Mural: {
        title: 'Sala de espera',
        image: mural,
        pitch: -11,
        yaw: -169,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -14,
                yaw: -64,
                cssClass: 'nextTour',
            },
            backTour: {
                pitch: -12,
                yaw: -90,
                cssClass: 'backTour',
                tour: 'Sistem_Mural'
            }
        }
    },
    Telescope: {
        title: 'Telescopios',
        image: telescopios,
        pitch: -15,
        yaw: 24,
        hfov: 110,
        hotspot: {
            nextTour: {
                pitch: -15,
                yaw: 24,
                cssClass: 'nextTour',
                tour: 'observadores'
            },
            backTour: {
                pitch: -24,
                yaw: 98,
                cssClass: 'backTour',
                tour: 'Sistem_Mural'
            }
        }
    },
    DomoInicio: {
        title: 'Domo digital',
        image: inicioDomo,
        pitch: 4,
        yaw: -5,
        hfov: 80,
        hotspot: {
            nextTour: {
                pitch: -9,
                yaw: -8,
                cssClass: 'nextTour',
                tour: 'Domo'
            },
            backTour: {
                pitch: -41,
                yaw: 84,
                cssClass: 'backTour',
                tour: 'Sistem_Mural'
            }
        }
    },
    Domo: {
        title: 'Domo digital',
        image: Domo,
        pitch: -34,
        yaw: -53,
        hfov: 80,
        hotspot: {
            backTour: {
                pitch: -56,
                yaw: -53,
                cssClass: 'backTour',
                tour: 'DomoInicio'
            }
        }
    },
    observadores: {
        title: 'Observadores',
        image: observadores,
        pitch: -32,
        yaw: 77,
        hfov: 90,
        hotspot: {
            backTour: {
                pitch: -24,
                yaw: 6,
                cssClass: 'backTour',
                tour: 'Telescope'
            }
        }
    }
};

export default Scenes;