/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'

// import required modules
import SwiperClass, { Mousewheel, Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { StyledSlider, Wrapper, WrapperSlide } from './SwiperFilms.styles'
import Card from '../Card'
import { CardsProps } from '../Cards/Cards.types'


const SwiperFilms: React.FC<CardsProps> = ({cards}) => {

  
  /* const onSwiper = (swiper: SwiperClass) => {
		setTimeout(() => {
      // @ts-ignore
      swiper.params.navigation.prevEl = navigationPrevRef.current;
      // @ts-ignore
      swiper.params.navigation.nextEl = navigationNextRef.current;
			// Re-init navigation
			swiper.navigation.destroy();
			swiper.navigation.init();
			swiper.navigation.update();
		});
	}; */

  return (
    <StyledSlider
    cssMode={true}
    mousewheel={true}
    slidesPerView={2.5}
    slidesPerGroup={2}
    spaceBetween={10}
    modules={[Navigation, Mousewheel]}
    className="mySwiper"
    speed={500}
    navigation
    breakpoints={
        { 
          577: { slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 15, }, 
            769: { slidesPerGroup: 3,
              slidesPerView: 3,
              spaceBetween: 30,}, 
          1024: { slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 30,}, 
          1200: { slidesPerGroup: 5,
            slidesPerView: 5,
            spaceBetween: 30,}  }}
    >
      <Wrapper>
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <WrapperSlide>
            <Card card={item} />
            </WrapperSlide>
          </SwiperSlide>
        ))}
      </Wrapper>
    </StyledSlider>
  )
}

export default SwiperFilms
