import { Swiper as SwiperComponent, SwiperSlide} from 'swiper/react'
import './Slider.css'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

import vogue from '../../assets/vogue.png'
import adidas from '../../assets/adidas.png'
import fila from '../../assets/fila.png'
import befree from '../../assets/befree.png'
import dolce from '../../assets/dolce.png'
import nike from '../../assets/nike.png'

export default function Slider() {
 return(
 <>
    <SwiperComponent
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className='swiper_container'
    >
    <SwiperSlide>
    <img src={vogue} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={adidas} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={fila} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={befree} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={dolce} alt="slide" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={nike} alt="slide" />
    </SwiperSlide>
    </SwiperComponent>

 </>
 );
}
