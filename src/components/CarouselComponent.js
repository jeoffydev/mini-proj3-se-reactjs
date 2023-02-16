import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = (props) => { 
        const { propertyImages } = props;
        
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        const finalCarousel = propertyImages?.filter((c)=>c)
        
        function CarouselComponent() {

            return (
                <Carousel activeIndex={index} onSelect={handleSelect} className={'carousel-wrapper'} >
                    {
                        finalCarousel?.map((c, ind)=>{
                            return (
                                <Carousel.Item key={ind}>
                                    <img
                                    className="d-block w-100"
                                    src={c}
                                    alt="Slide"
                                    style={{maxWidth:'50%'}}
                                    />
                                </Carousel.Item>
                            )
                        })
                    }
               
                </Carousel>
            );
        }

    return CarouselComponent();

}

export default CarouselComponent;