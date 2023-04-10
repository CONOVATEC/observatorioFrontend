import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react';

import Slider from 'react-slick';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

import style from './style.module.css'

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CaptionCarouselProps {
  cards?: (JSX.Element | null)[];
  carouselProps?: any
}

export default function CaptionCarousel({cards, carouselProps}: CaptionCarouselProps) {
  const [ slider, setSlider ] = useState<Slider | null>(null);

  return (
    <Box
      display={{lg:'none'}}
      position={'relative'}
      height={'480px'}
      {...carouselProps}
      width={'full'}
      overflow={'hidden'}>
      <IconButton
        aria-label='left-arrow'
        variant='ghost'
        position='absolute'
        left={'1rem'}
        top={'50%'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <ArrowBackIcon boxSize='40px' />
      </IconButton>
      <IconButton
        aria-label='right-arrow'
        variant='ghost'
        position='absolute'
        right={'1rem'}
        top={'50%'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <ArrowForwardIcon boxSize='40px' />
      </IconButton>
      <Slider className={style.carousel} adaptiveHeight {...settings} ref={(slider) => setSlider(slider)}>
        {cards}
      </Slider>
    </Box>
  );
}
