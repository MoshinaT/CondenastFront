import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

function DemoCarousel({data}) {
   
        return (
            <Carousel style={{width:"70%",margin:"auto",height:"550px"}}>
                 {data && data.map((ele,id) =>
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={ele.urlToImage}
                height="500px"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{ele.title}</h3>
                <p>{ele.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
                 )}
         
          </Carousel>
        );
    
};

export {DemoCarousel}

