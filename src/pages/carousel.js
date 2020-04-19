import React from 'react';
import ProjectCarousel from '../components/project-carousel';
import LayoutCarousel from '../components/layout-carousel';
import SlideShow from '../components/slideshow';
import {Link} from 'gatsby';

const Carousel = ({ children })  => (
    
<LayoutCarousel>
        <SlideShow />
</LayoutCarousel>

)
    
    
export default Carousel;
    