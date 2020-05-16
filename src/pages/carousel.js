import React from 'react';
import LayoutCarousel from '../components/layout-carousel';
import SlideShow from '../components/slideshow';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const Carousel = ({ children })  => (

<LayoutCarousel>
        <SlideShow />
</LayoutCarousel>
     

)
    
    
export default Carousel;
    