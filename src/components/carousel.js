import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function carousel() {
    require('bootstrap/dist/css/bootstrap.min.css');
    return (
        <Carousel variant="dark" fade={true} >
            <Carousel.Item>
                <img
                    className='img_carousel'
                    src={require('../images/carousel/image1.png')}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Planetario digital chimalhuacan</h3>
                    <p>Visitanos para optener la mejor de las experiencias</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='img_carousel'
                    src={require('../images/carousel/image2.png')}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Somo el segundo mejor planetario de Latinoamerica</h3>
                    <p>♥♥</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='img_carousel'
                    src={require('../images/carousel/image3.png')}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}