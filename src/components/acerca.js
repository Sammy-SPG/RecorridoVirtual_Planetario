import React from 'react';
import { Table } from 'react-bootstrap';
import Carousel from './carousel';

export default function Acerca() {
    require('../styles/acerca.css');
    
    return (
        <div>
            <Carousel />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4rem' }}>
                <div className='header'>
                    <h2 className="title">Planetario Digital Chimalhuacan</h2>
                    <p>Ayuntamiento de Chimalhuacan/Parque Ecoturistico El Chimalhuache</p>
                </div>
                <div className='datos'>
                    <h3>Datos</h3>
                    <hr />
                    <p>
                        Es el segundo planetario más grande México y de Latinoamérica. La principal atracción del Planetario es el domo de inmersión digital, considerado como uno de los mejores equipados a nivel nacional con tecnología 4k, 
                        audio envolvente 3D, butacas reclinables y una capacidad para 220 personas.
                        <br /><br />
                        El domo cuenta con siete salas para exposiciones permanentes y temporales. En una primera etapa, el inmueble alberga Casa de la Tierra, que consta de una esfera de dos metros de diámetro y cuatro proyectores.
                        Áreas Naturales Protegidas, que contiene ocho infogramas con temáticas alusivas a la preservación de las especies y áreas protegidas.
                        Probadita de Ciencia, consiste en diez mesas interactivas con temas como óptica, estática, dinámica y fases de la luna y nebulosas, con 40 imágenes basadas en un concurso de astrofotografía.</p>
                </div>
                <div className='datos'>
                    <h3>Horarios y costos</h3>
                    <hr/>
                    <p>Abierto al publico de Martes a Domingo de 10 a 17:00 hrs <br/> Entrada general: $40 <br/> Niños de 3 a 15 años: $20</p>
                </div>
                <div style={{ width: '80%', marginTop: '2rem'}} className='datos'>
                    <h3>Horarios de funciones</h3>
                    <hr />
                    <Table responsive="xl" hover>
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Martes</th>
                                <th>Miercoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sabado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12:00</td>
                                <td>Maya</td>
                                <td>Tierra</td>
                                <td>Maya</td>
                                <td>Despegue</td>
                                <td>Tierra</td>
                                <td>Mexica</td>
                            </tr>
                            <tr>
                                <td>13:00</td>
                                <td>Tierra</td>
                                <td>Despegue</td>
                                <td>Tierra</td>
                                <td>Moon</td>
                                <td>Solar</td>
                                <td>Constelacion</td>
                            </tr>
                            <tr>
                                <td>14:00</td>
                                <td>Despegue</td>
                                <td>Moon</td>
                                <td>Despegue</td>
                                <td>Mexica</td>
                                <td>Maya</td>
                                <td>Tierra</td>   
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>Moon</td>
                                <td>Maya</td>
                                <td>Mexica</td>
                                <td>Tierra</td>
                                <td>Constelacion</td>
                                <td>Mexica</td>
                            </tr>
                            <tr>
                                <td>16:00</td>
                                <td>Mexica</td>
                                <td>Tierra</td>
                                <td>Moon</td>
                                <td>Maya</td>
                                <td>Solar</td>
                                <td>Solar</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className='datos' style={{marginTop: '2rem'}}>
                    <h3>Funciones</h3>
                    <div className='grid-function'>
                        <div className ='gridContainer'>
                            <img className='gridImage' src={require('../images/Posters/DeLaTierraAlUniverso.png')} alt = 'Funcion de planetario'/>
                            <p className ='ID-grid'>ID: Universo</p>
                        </div>
                        <div className ='gridContainer'>
                            <img className='gridImage' src={require('../images/Posters/SistemaSolar.png')} alt = 'Funcion de planetario'/>
                            <p className ='ID-grid'>ID: Solar</p>
                        </div>
                        <div className ='gridContainer'>
                            <img className='gridImage' src={require('../images/Posters/YoTierra.png')} alt = 'Funcion de planetario'/>
                            <p className ='ID-grid'>ID: Tierra</p>
                        </div>
                        <div className ='gridContainer'>
                            <img className = 'gridImage' src={require('../images/Posters/ArqueoastronomiaMexica.png')} alt = 'Funcion de planetario'/>
                            <p className ='ID-grid'>ID: Mexica</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}