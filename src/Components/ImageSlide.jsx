import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ImageSlider(){
  const slides = [
    {
      id: 1,
      imagePath: 'path_to_your_image1.jpg',
      caption: 'First slide label',
      description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      id: 2,
      imagePath: 'path_to_your_image2.jpg',
      caption: 'Second slide label',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      imagePath: 'path_to_your_image3.jpg',
      caption: 'Third slide label',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
    },
  ];
  return (
    <Carousel>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img className="d-block w-100" src={slide.imagePath} alt={`Slide ${slide.id}`} />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

