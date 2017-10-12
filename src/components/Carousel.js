import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'


const CarouselWrapper = (props)=> {

    const {items} = props;

    const renderItem = (item, index)=>{
        return (
            <div key={index}>
                <img src={item.image} />
                <p className="legend">{item.title}</p>
            </div>
        )
    }

    return (
       <Carousel showStatus={false} showThumbs={false}>
           {items && items.map(renderItem)}
       </Carousel>
    )
}

export default CarouselWrapper