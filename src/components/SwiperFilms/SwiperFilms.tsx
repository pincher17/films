/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'

// import required modules
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { StyledSlider, Wrapper, WrapperSlide } from './SwiperFilms.styles'
import Card from '../Card'
import { CardsProps } from '../Cards/Cards.types'


const SwiperFilms: React.FC<CardsProps> = ({cards}) => {
  
  return (
    <StyledSlider
      slidesPerView={1}
      spaceBetween={25}
      navigation
      modules={[Navigation]}
      className="mySwiper"
      breakpoints={{ 540: { slidesPerView: 3 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5}, 1920: { spaceBetween: 70, slidesPerView: 5}  }}
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
