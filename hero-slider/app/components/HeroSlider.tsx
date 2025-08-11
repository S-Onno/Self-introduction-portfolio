'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Swiperの基本CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Slide = { src: string; alt?: string };
export default function HeroSlider({ images }: { images: Slide[] }) {
  return (
    <div className="slider-wrap">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2600, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={16}
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="slider-card">
              <Image src={img.src} alt={img.alt ?? `slide-${i}`} fill priority sizes="100vw" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
